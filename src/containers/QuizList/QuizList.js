import Axios from '../../axios/axios-quiz'
import React from 'react'
import {NavLink} from 'react-router-dom'
import Loader from '../../components/UI/loader/Loader'
import classes from './QuizList.module.css'

export default class QuizList extends React.Component {
  state = {
    quizes: [],
    loading: true,
  }

  renderQuizes() {
    return this.state.quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={`/quiz/${quiz.id}`}>{quiz.name}</NavLink>
        </li>
      )
    })
  }

  async componentDidMount() {
    try {
      const response = await Axios.get('quizes.json')

      const quizes = []
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест № ${index + 1}`,
        })
      })
      this.setState({quizes, loading: false})
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <h1>Список тестов</h1>
        {this.state.loading ? <Loader /> : <ul>{this.renderQuizes()}</ul>}
      </div>
    )
  }
}

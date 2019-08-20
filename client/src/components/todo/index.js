import React, { Component } from 'react'
import api from '../../services/axios'

export default class Todo extends Component {
  async componentDidMount () {
    const todos = await api.get('todo')
    console.log(todos)
  }

  render () {
    return <div>Todo</div>
  }
}

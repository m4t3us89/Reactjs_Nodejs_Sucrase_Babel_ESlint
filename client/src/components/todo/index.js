import React, { useState, useEffect } from 'react'
import api from '../../services/axios'

export default function Todo () {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  async function getTodos () {
    const { data: todosN } = await api.get('todo')
    setTodos(todosN)
  }

  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}> {todo.title} </li>
        ))}
      </ul>
    </>
  )
}

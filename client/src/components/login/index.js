import React, { useState, useEffect } from 'react'
import api from '../../services/axios'
import { Form, Button, Alert } from 'react-bootstrap'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [alert, setAlert] = useState({
    show: false,
    message: '',
    error: false
  })

  const redux = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(redux, 'login init')
  }, [])

  useEffect(
    () => {
      console.log(redux, 'login mudança')
    },
    [redux]
  )

  const login = async evt => {
    evt.preventDefault()
    dispatch({ type: 'isLoading', isLoading: true })
    try {
      const { data: credentials } = await api.post('auth', {
        email,
        password
      })
      setAlert({
        show: true,
        error: false,
        message: 'Logado com sucesso!'
      })
      localStorage.setItem('credentials', JSON.stringify(credentials))
      window.location.href = '/todo'
    } catch (err) {
      const { message: responseError } = err.response.data
      setAlert({
        show: true,
        error: true,
        message: responseError
      })
    }
  }

  return (
    <>
      {alert.show ? (
        <Alert variant={alert.error ? 'danger' : 'success'}>
          {alert.message}
        </Alert>
      ) : (
        ''
      )}
      <Form onSubmit={login}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            onChange={event => setEmail(event.target.value)}
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            onChange={event => setPassword(event.target.value)}
            placeholder='Password'
          />
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          <FaSignInAlt /> Entrar
        </Button>
      </Form>
    </>
  )
}

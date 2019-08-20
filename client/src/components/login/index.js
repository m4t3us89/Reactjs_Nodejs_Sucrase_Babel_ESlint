import React, { Component } from 'react'
import api from '../../services/axios'
import { Form, Button, Alert } from 'react-bootstrap'
import { FaSignInAlt } from 'react-icons/fa'
import { Redirect } from 'react-router-dom'
import './styles.css'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    alert: {
      show: false,
      message: '',
      error: false
    }
  }

  login = async event => {
    const { email, password } = this.state
    event.preventDefault()
    try {
      const { data: credentials } = await api.post('auth', {
        email,
        password
      })
      this.setState({
        alert: {
          show: true,
          error: false,
          message: 'Logado com sucesso!'
        }
      })
      localStorage.setItem('credentials', JSON.stringify(credentials))
      return <Redirect to='/todo' />
    } catch (err) {
      const { message: responseError } = err.response.data
      this.setState({
        alert: {
          show: true,
          error: true,
          message: responseError
        }
      })
    }
  }

  render () {
    return (
      <>
        {this.state.alert.show ? (
          <Alert variant={this.state.alert.error ? 'danger' : 'success'}>
            {this.state.alert.message}
          </Alert>
        ) : (
          ''
        )}
        <Form onSubmit={this.login}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              name='email'
              onChange={event => this.setState({ email: event.target.value })}
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
              onChange={event =>
                this.setState({ password: event.target.value })
              }
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
}

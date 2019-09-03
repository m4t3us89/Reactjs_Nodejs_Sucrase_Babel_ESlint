import React, { Component } from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './components/home'

import Todo from './components/todo'

import isAuthenticated from './auth/auth'

const PrivateRoute = ({ component: Componenet, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Componenet {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.locatiton } }} />
      )
    }
  />
)

export default class Routes extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={() => <Home {...this.props} />} />
          <PrivateRoute
            path='/todo'
            component={() => <Todo {...this.props} />}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

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

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Todo} />
      <PrivateRoute path='/products/:id' component={Todo} />
    </Switch>
  </BrowserRouter>
)

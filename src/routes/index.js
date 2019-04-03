import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import routes from './routes'

export default () => (
  <Switch>
    {routes.map((route, index) => (
      <Route {...route} key={index} exact />
    ))}
    <Redirect to={routes[0].path} />
  </Switch>
)

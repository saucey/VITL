import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Vitl from './pages/index'

export default () => (
  <Switch>
    <Route path="/" exact component={Vitl} />
  </Switch>
)

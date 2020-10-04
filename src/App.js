import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'

import Entry from './views/Entry'
import Expeditions from './views/Expeditions'
import Expedition from './views/Expedition'
import Login from './views/Login'
import Register from './views/Register'
import Topic from './views/Topic'
import Question from './views/Question'
import Notifications from './views/Notifications'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Entry />
        </Route>
        <Route path="/cadastro">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/app" exact>
          <Expeditions />
        </Route>
        <Route path="/app/expedicoes/:expedition" exact>
          <Expedition />
        </Route>
        <Route path="/app/expedicoes/:expedition/topicos/:topic" exact>
          <Topic />
        </Route>
        <Route path="/app/expedicoes/:expedition/topicos/:topic/questao">
          <Question />
        </Route>
        <Route path="/app/notificacoes">
          <Notifications />
        </Route>
      </Switch>
    </Router>
  )
}

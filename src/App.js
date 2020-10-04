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
import Notifications from './views/Notifications'
import Question from './views/Question'
import Register from './views/Register'
import Settings from './views/Settings'
import Topic from './views/Topic'

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
        <Route path="/app/configuracoes">
          <Settings />
        </Route>
      </Switch>
    </Router>
  )
}

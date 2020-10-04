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
import Fail from './views/Fail'
import Games from './views/Games'
import Login from './views/Login'
import MythOrTruth from './views/MythOrTruth'
import Notifications from './views/Notifications'
import Presentation from './views/Presentation'
import Question from './views/Question'
import Register from './views/Register'
import Settings from './views/Settings'
import Topic from './views/Topic'
import Success from './views/Success'

export default function App() {
  return (
    <Router className="h-100">
      <Switch>
        <Route path="/" exact>
          <Presentation />
        </Route>
        <Route path="/entrada" exact>
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
        <Route path="/app/games" exact>
          <Games />
        </Route>
        <Route path="/app/games/mito-ou-verdade">
          <MythOrTruth />
        </Route>
        <Route path="/app/games/sucesso">
          <Success />
        </Route>
        <Route path="/app/games/falha">
          <Fail />
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

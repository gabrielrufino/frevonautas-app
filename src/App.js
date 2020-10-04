import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'

import Entry from './views/Entry'
import Expeditions from './views/Expeditions'
import Login from './views/Login'
import Register from './views/Register'

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
        <Route path="/app">
          <Expeditions />
        </Route>
      </Switch>
    </Router>
  )
}

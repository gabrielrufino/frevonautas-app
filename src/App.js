import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'

import Entry from './views/Entry'
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
      </Switch>
    </Router>
  );
}

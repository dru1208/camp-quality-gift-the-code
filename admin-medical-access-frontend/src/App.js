import React, { Component } from 'react';
import './App.css';
import axios from "axios"

import history from "./history"
import { Router, Route, Switch } from 'react-router-dom';


// landing page
import Home from "./pages/landingPage/index"

// sessionSelection
import SessionSelection from "./pages/sessionSelection/index"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      campLocation: "test",

    }
  }

  _handleLogin = e => {
    e.preventDefault()
    const loginInfo = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    const options = {
      method: "POST",
      headers: {'content-type': 'application/json'},
      data: loginInfo,
      url: 'http://localhost:3000/api/login'
    }
    axios(options)
      .then(response => {
        if (response.data.valid) {
          this.setState({
            isLoggedIn: true,
            campLocation: this.campLocation
          }, () => {
            history.push("/session_select")
          })
        }
      })

  }

  render() {
    return (
      <Router history={ history } >
        <Switch>
          <Route exact path="/" render={() => <Home handleLogin={this._handleLogin} /> } />
          <Route path="/session_select" render={() => <SessionSelection campLocation={this.state.campLocation} /> } />
        </Switch>

      </Router>
    );
  }
}

export default App;

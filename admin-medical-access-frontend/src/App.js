import React, { Component } from 'react';
import './App.css';
import axios from "axios"

import history from "./history"
import { Router, Route, Switch } from 'react-router-dom';


import { parseJwt } from "./shared/utils"

// landing page
import Home from "./pages/landingPage/index"

// session selection
import SessionSelection from "./pages/sessionSelection/index"

// campers list
import Campers from "./pages/campers/index"

// camper profile
import CamperProfile from "./pages/camperProfile/index"




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      campLocation: "",
      currentSessionInfo: {},
      sessions: [],
      currentSessionID: "",
      campers: [],
      jwt: ""
    }
  }

  _handleLogin = e => {
    e.preventDefault();
    const loginInfo = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    const options = {
      method: "POST",
      headers: {'content-type': 'application/json'},
      data: loginInfo,
      url: 'http://localhost:3002/api/login/admin'
    }
    axios(options)
      .then(response => {
        if (response.data.success) {
          const decodedPayload = parseJwt(response.data.token)
          this.setState({
            isLoggedIn: true,
            campLocation: decodedPayload.campLocation,
            jwt: response.data.token,
            sessions: response.data.sessions
          }, () => {
            history.push("/session_select")
          })
        }
      })
  }

  _handleSessionSelection = e => {
    e.preventDefault()
    this.setState({
      currentSessionID: e.target.sessionID.value
    }, () => {
      const options = {
        method: "POST",
        headers: {'content-type': 'application/json'},
        data: { currentSessionID: this.state.currentSessionID },
        url: 'http://localhost:3002/api/session_selection'
      }
      console.log("options set")
      axios(options)
        .then(response => {
          console.log("response 1")
          if (response.data.campers.length > 0) {
            console.log("response received")
            this.setState({
              // campers: response.data
              campers: response.data.campers
            }, () => {
              console.log("state set")
              history.push("/camper_list")
            })
          }
        })
        .catch((err) => {
          throw err
        })

    })
  }


  render() {
    return (
      <Router history={ history } >
        <Switch>
          <Route exact path="/" render={() => <Home handleLogin={this._handleLogin} /> } />
          <Route exact path="/session_select" render={() => <SessionSelection campLocation={this.state.campLocation} sessions={this.state.sessions} handleSessionSelection={this._handleSessionSelection} /> } />
          <Route exact path="/camper_list" render={() => <Campers campers={this.state.campers} /> } />
          <Route path="/camper_profile/" render={() => <CamperProfile /> }/>
        </Switch>

      </Router>
    );
  }
}

export default App;

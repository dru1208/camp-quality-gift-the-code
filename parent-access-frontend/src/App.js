import React, { Component, Fragment } from 'react';
import history from './history.jsx';
import './App.css';
import {
  withRouter,
  Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Campers from './components/Campers';
import CampRegister from './components/CampRegister'

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <Welcome />} />
          <Route exact path="/home" render={() => {
            return (
              <Fragment>
                <Home />
              </Fragment>
            )}
          } />
          <Route exact path="/camp_register" render={() => <CampRegister />}/>
          <Route exact path="/campers" render={() => <Campers />}/>
        </Switch>
      </Router>;
  }
}

export default App;

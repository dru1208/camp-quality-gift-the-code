import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './Login.jsx'
import RegistrationForm from './Signup.jsx'


class Welcome extends Component {

  constructor(props) {
    super(props);

    this.state= {
      currentForm: "showLoginForm"
    };
  }

  closeForm = (e) => {
    e.preventDefault();
    this.setState({
      currentForm: ""
    });

  }

  generateForm = () => {
    if (this.state.currentForm === "showLoginForm") {
      return (
        <div className="formContent">
          <LoginForm className="loginForm" closeForm={this.closeForm} handleLogin={this.props.handleLogin}/>
        </div>
      )
    } else if (this.state.currentForm === "showRegistrationForm") {
      return (
        <div className="formContent">
          <RegistrationForm className="registrationForm"/>
        </div>
      )
    }
  }

  showLoginForm = (e) => {
    e.preventDefault()
    this.setState({
      currentForm: "showLoginForm"
    });
    this.generateForm();
  }

  showRegistrationForm = (e) => {
    e.preventDefault()
    this.setState({
      currentForm: "showRegistrationForm"
    });
    this.generateForm();
  }

  render() {

    let loginFormClass = this.state.currentForm === "showLoginForm" ? "loginLink activeForm" : "loginLink";
    let registrationFormClass = this.state.currentForm === "showRegistrationForm" ? "registrationLink activeForm" : "registrationLink";
    return (
      <div className="landingPage">
        <div className="landingForms">
          <h2 className="landingHeader">Welcome</h2>
          <div className="loginRegisterForm">
            <div className="loginRegister-btn">
              <li className={loginFormClass} onClick={this.showLoginForm}>Login</li>
              <li className={registrationFormClass} onClick={this.showRegistrationForm}>Register</li>
            </div>
            {this.generateForm()}
          </div>
        </div>
      </div>
    )
  }


}
export default Welcome;
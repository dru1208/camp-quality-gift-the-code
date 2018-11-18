import React, { Component } from "react";
import axios from "axios";

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
  }

  _handleLogin = (e) => {
    e.preventDefault();

    // const options = {
    //   method: "POST",
    //   headers: {'content-type': 'application/json'},
    //   data: loginObj,
    //   url: 'http://localhost:3000/api/login'
    // }

    // axios(options)
    //   .then((response) => {
    //     if (response.data) {
    //       const userInfo = jwt_decode(response.data)
    //       this.setState({
    //         currentUser: userInfo.firstName,
    //         userID: userInfo.userID,
    //         location: userInfo.location,
    //         jwt: response.data
    //       }, () => {
    //         history.push(generateUserURL(this.state.userID, "dashboard"))
    //       })
    //     }
    //   })
  }

  render() {
    return (
      <form className="login100-form validate-form">
        <span className="login100-form-title p-b-26">
          Vera Admin Portal
        </span>
        <span className="login100-form-title p-b-48">
          <i className="zmdi zmdi-font"></i>
        </span>

        <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
          <input className="input100" type="text" name="username" />
          <span className="focus-input100" data-placeholder="Username"></span>
        </div>

        <div className="wrap-input100 validate-input" data-validate="Enter password">
          <span className="btn-show-pass">
            <i className="zmdi zmdi-eye"></i>
          </span>
          <input className="input100" type="password" name="password" />
          <span className="focus-input100" data-placeholder="Password"></span>
        </div>

        <div className="container-login100-form-btn">
          <div className="wrap-login100-form-btn">
            <div className="login100-form-bgbtn"></div>
            <button className="login100-form-btn" onClick={this._handleLogin}>
              Login
            </button>
          </div>
        </div>

        <div className="text-center p-t-115">
          <span className="txt1">
            Don’t have an account?
          </span>

          <a className="txt2" href="#">
            Sign Up
          </a>
        </div>
      </form>
    )
  }
}

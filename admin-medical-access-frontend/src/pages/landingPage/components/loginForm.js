import React from "react"

const LoginForm = props => (
  <form className="loginForm">
    <label for="username">USERNAME</label>
    <input type="text" name="username" />
      <br />
    <label for="password">PASSWORD</label>
    <input type="password" name="password" />
      <br />
    <input className= "loginButton" type="submit" value="Login"/>
    <a href="/session_select">click</a>
  </form>
)

export default LoginForm
import React from "react"
import LoginForm from "./components/loginForm"

const Home = props => (
  <div>
    <div>Welcome to the Medical Administration Portal</div>
    <LoginForm handleLogin={props.handleLogin} />
    <a href="/session_select">click</a>
  </div>
)

export default Home
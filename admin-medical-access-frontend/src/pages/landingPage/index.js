import React from "react"
import LoginForm from "./components/loginForm"
import Logo from "./vera.png"

const Home = props => (
  <div className="loginPage">
    <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
      <LoginForm handleLogin={props.handleLogin} />
      </div>
    </div>
  </div>

  </div>


)

export default Home





    // <div className="logoImgContainer">
    //   <img className="logoImg" src={Logo} />
    // </div>

    // <div className="loginFormContainer">
    //   <div className="loginHeader">WELCOME TO THE MEDICAL ADMINISTRATION PORTAL</div>
    // </div>
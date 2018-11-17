import React, { Component } from 'react';
import NavBar from './NavBar';
import FormInfo from './FormInfo';


export default class CampRegister extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentForm: "info",
      info: {},
      health: {},
      docs: {}
    }
  }

  updateInfo = () => {
    console.log("updating info");
  }

  render(){
    const { currentForm } = this.state;
    let formDisplay;
    switch(currentForm){
      case "info":
        formDisplay = <FormInfo />
        break
      case "health":
        break
      case "docs":
        break
      default:
        break
    }

    return(
      <div>
        <NavBar />
        { formDisplay }
      </div>
    )
  }
}
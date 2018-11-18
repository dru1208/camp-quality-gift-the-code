import React, { Component } from 'react';
import NavBar from './NavBar';
import FormInfo from './FormInfo';
import FormHealth from './FormHealth';
import FormDocs from './FormDocs';


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

  changeViews = (view) => {
    this.setState({
      currentForm: view
    })
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
        formDisplay = <FormHealth />
        break
      case "docs":
        formDisplay = <FormDocs />
        break
      default:
        break
    }

    return(
      <div>
        <NavBar changeViews={this.changeViews}/>
        { formDisplay }
      </div>
    )
  }
}
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

  getNextView = () => {
    const { currentForm } = this.state;
    let nextView;
    switch(currentForm){
      case "info":
        nextView = "health"
        break
      case "health":
        nextView = "docs"
        break
      case "docs":
      default:
        break
    }
    return nextView;
  }

  changeViews = (view) => {
    this.setState({
      currentForm: view
    })
  }

  updateInfo = (details) => {
    const { currentForm } = this.state;
    const nextView = this.getNextView();
    this.setState({
      [currentForm]: {...details},
      currentForm: nextView
    })
  }

  render(){
    const { currentForm } = this.state;
    let formDisplay;
    switch(currentForm){
      case "info":
        formDisplay = <FormInfo updateInfo={this.updateInfo}/>
        break
      case "health":
        formDisplay = <FormHealth updateInfo={this.updateInfo} />;
        break
      case "docs":
        formDisplay = <FormDocs updateInfo={this.updateInfo} />;
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
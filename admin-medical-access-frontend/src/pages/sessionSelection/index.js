import React, { Component } from "react"
import SessionRadioMenu from "./components/sessionRadioMenu.js"


const testSessions = [{id: 1, startDate: "12/20/20", endDate: "12/27/20"}, {id: 2, startDate: "1/5/18", endDate: "1/12/18"}]

class SessionSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSessionInfo: {},
      sessions: testSessions,
    }
  }

  render() {
    return (
      <div>
        <div>Select The Current Camp Session!</div>
        <SessionRadioMenu sessions={this.state.sessions} campLocation={this.props.campLocation} />
      </div>
    )
  }
}

export default SessionSelection
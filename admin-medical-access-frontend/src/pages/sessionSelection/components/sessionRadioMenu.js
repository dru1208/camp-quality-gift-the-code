import React, { Component } from "react"

class SessionRadioMenu extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const generateSessions = this.props.sessions.map((sessionInfo, index) => {
      return <option className="sessionOption" key={index} value={sessionInfo.id}>{`${this.props.campLocation}: ${sessionInfo.startDate} to ${sessionInfo.endDate}`}</option>
    })

    return (
      <div className="sessionContainer">
        <form onSubmit={this.props.handleSessionSelection}>
          <select className="sessionDropdown" name="sessionID">
            { generateSessions }
          </select>
          <input type="submit" value="Select Session" />
        </form>
      </div>
    )
  }
}

export default SessionRadioMenu
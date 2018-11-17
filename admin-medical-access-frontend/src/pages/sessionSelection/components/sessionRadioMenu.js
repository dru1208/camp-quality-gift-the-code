import React, { Component } from "react"

class SessionRadioMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sessionID: "",
    }
  }

  _handleSessionSelection = (e) => {
    e.preventDefault()
  }

  render() {
    const generateSessions = this.props.sessions.map((sessionInfo, index) => {
      return <option value={sessionInfo.id}>{`${this.props.campLocation}: ${sessionInfo.startDate} to ${sessionInfo.endDate}`}</option>
    })

    return (
      <div>
        <form onSubmit={this._handleSessionSelection}>
          <select>
            { generateSessions }
          </select>
          <input type="submit" value="Select Session" />
        </form>
      </div>
    )
  }
}

export default SessionRadioMenu
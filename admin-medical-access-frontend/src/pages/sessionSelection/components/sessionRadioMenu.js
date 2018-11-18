import React from "react"

const SessionRadioMenu = props => {

  const generateSessions = props.sessions.map((sessionInfo, index) => {
    return <option className="sessionOption" key={index} value={sessionInfo.id}>{`${props.campLocation}: ${sessionInfo.startDate} to ${sessionInfo.endDate}`}</option>
  })

  return (
    <div className="sessionContainer">
      <form onSubmit={props.handleSessionSelection}>
        <select className="sessionDropdown" name="sessionID">
          { generateSessions }
        </select>
        <button className="selectSession-btn">Select Session</button>
      </form>
    </div>
  )
}

export default SessionRadioMenu
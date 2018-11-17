import React from "react"

const SessionRadioMenu = props => {

  const generateSessions = props.sessions.map((sessionInfo, index) => {
    return <option key={index} value={sessionInfo.id}>{`${props.campLocation}: ${sessionInfo.startDate} to ${sessionInfo.endDate}`}</option>
  })

  return (
    <div>
      <form onSubmit={props.handleSessionSelection}>
        <select name="sessionID">
          { generateSessions }
        </select>
        <input type="submit" value="Select Session" />
      </form>
    </div>
  )
}

export default SessionRadioMenu
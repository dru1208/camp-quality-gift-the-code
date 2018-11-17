import React from "react"
import SessionRadioMenu from "./components/sessionRadioMenu"



const SessionSelection = props => {

  return (
    <div>
      <div>Select The Current Camp Session!</div>
      <SessionRadioMenu
        sessions={props.sessions}
        campLocation={props.campLocation}
        handleSessionSelection={props.handleSessionSelection}
      />
    </div>
  )

}

export default SessionSelection
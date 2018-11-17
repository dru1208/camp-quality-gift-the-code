import React from "react"
import { generateCamperProfileURL } from "../../../shared/utils"
import history from "../../../history"

const CamperEntry = ({ camper }) => {

  const _viewCamperProfile = e => {
    e.preventDefault()
    const url = generateCamperProfileURL(camper.id)
    history.push(url)
  }

  return (
    <tr>
      <td>{ camper.firstName + " " + camper.lastName}</td>
      <td>{ camper.id }</td>
      <td>{ camper.medAdministered ? "True" : "False"}</td>
      <td>{ camper.disease }</td>
      <td><button onClick={ _viewCamperProfile } >View Profile</button></td>
    </tr>
  )
}

export default CamperEntry
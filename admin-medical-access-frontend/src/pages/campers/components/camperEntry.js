import React from "react"
import { generateCamperProfileURL } from "../../../shared/utils"

const CamperEntry = ({ camper }) => {


  return (
    <tr>
      <td>{ camper.firstName + " " + camper.lastName}</td>
      <td>{ camper.id }</td>
      <td>{ camper.medAdministered ? "True" : "False"}</td>
      <td>{ camper.disease }</td>
      <td><a href={ generateCamperProfileURL(camper.id) }>View Profile</a></td>
    </tr>
  )
}

export default CamperEntry
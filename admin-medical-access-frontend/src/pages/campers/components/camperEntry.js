import React from "react"


const CamperEntry = ({ camper }) => {


  return (
    <tr>
      <td>{ camper.firstName + " " + camper.lastName}</td>
      <td>{ camper.medAdministered ? "True" : "False"}</td>
      <td>{ camper.disease }</td>
      <td><a href="">View Profile</a></td>
    </tr>
  )
}

export default CamperEntry
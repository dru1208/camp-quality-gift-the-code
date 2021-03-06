import React from "react"
import CamperEntry from "./camperEntry"

const CamperTable = props => {

  const generateCamperRow = props.campers.map((camper, index) => {
    return <CamperEntry key={index} camper={camper} />
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Camper ID</th>
          <th>Most Recent Medicine Administered</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        { generateCamperRow }
      </tbody>
    </table>
  )
}

export default CamperTable
import React, { Component, Fragment } from 'react';

const MedicationRow = ({name, dose, schedule, details}) => {
  return (
    <tr>
      <td>
        <input type="text" name="name" value={name}/>
      </td>
      <td>
        <input type="text" name="dose" value={dose}/>
      </td>
      <td>
        <input type="text" name="schedule" value={schedule}/>
      </td>
      <td>
        <input type="text" name="details" value={details}/>
      </td>
    </tr>
  )
}

export default class FormMedication extends Component {
  constructor(){
    super()
    this.state = {
      medications: [{
        name: "",
        dose: "",
        schedule: "",
        details: ""
      }]
    }
  }

  addMedication = e => {
    e.preventDefault()
    const previousMeds = this.state.medications;
    this.setState({
      medications: [...previousMeds, {
        name: "",
        dose: "",
        schedule: "",
        details: ""
      }]
    })
  }

  render(){
    const { medications } = this.state;
    const medicationRows = medications.map((elem, index) => {
      return <MedicationRow name={medications[index].name}
        dose={medications[index].dose}
        schedule={medications[index].schedule}
        details={medications[index].details}
        />
    })
    return <Fragment>
      <table>
        <thead>
          <tr>
            <th>Medication Name</th>
            <th>Dose</th>
            <th>Schedule</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {medicationRows}
        </tbody>
      </table>
      <button onClick={ this.addMedication }>Add More Medication</button>
    </Fragment>
  };
}
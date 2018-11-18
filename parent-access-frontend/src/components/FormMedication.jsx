import React, { Component, Fragment } from 'react';

const MedicationRows = ({medications}) => {
  return (
    medications.map((elem, ind) => {
      return <tr key={ind}>
          <td>
          <input data-id={ind} className="medName" type="text" name="medication_name" value={medications[ind].medName} />
          </td>
          <td>
            <input data-id={ind} className="dose" type="text" name="dose" value={medications[ind].dose} />
          </td>
          <td>
            <input data-id={ind} className="schedule" type="text" name="schedule" value={medications[ind].schedule} />
          </td>
          <td>
            <input data-id={ind} className="details" type="text" name="details" value={medications[ind].details} />
          </td>
        </tr>;
    })

  )
}

export default class FormMedication extends Component {
  constructor(props){
    super(props)
    this.state = {
      medications: [{
        medName: "",
        dose: "",
        schedule: "",
        details: ""
      }]
    }
  }

  saveMedications = e => {
    e.preventDefault()
    this.props.saveAllMedications(this.state.medications);
  }

  handleChange = e => {
    if(["medName", "dose", "schedule", "details"].includes(e.target.className)){
      let medications = [...this.state.medications]
      medications[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ medications })
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
    const medicationRows = <MedicationRows medications={medications} />
    return <Fragment>
      <table onChange={this.handleChange}>
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
      <button onClick={ this.saveMedications }>Save Medications</button>
    </Fragment>
  };
}
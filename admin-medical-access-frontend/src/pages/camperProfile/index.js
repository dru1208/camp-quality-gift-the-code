import React, { Component } from "react"
import { retrieveCamperID} from "../../shared/utils"

import './index.css'


class CamperProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      camperID: "",
      loading: true,
      info: {}
    }
  }

  componentDidMount() {
    const newInfo = {
      firstName: 'John',
      lastName: 'Doe',
      otcPermitted: false,
      notes: 'test test fart test test',
      primaryDiagnosis: 'Cancer',
      secondaryDiagnosis: 'Leukemia',
      allergy: 'Peanut, Coffee, Milk',
      emergencyContact: {
        firstName: 'Jane',
        lastName: 'Doe',
        relationship: 'mom',
        email: 'test@gmail.com',
        phone: '999-999-9999'
      },
      treatment: {
        beenAdministered: false,
        date: '2018-11-23',
        details: 'must reduce to 25 mg when sick',
        dosage: '50 mg',
        medication: 'Advil',
        time: '11:00'
      }
    }
    this.setState({
      camperID: retrieveCamperID(window.location.pathname),
      info: {...newInfo},
      loading: false
    }, () => {
      console.log(this.state.camperID)
    })
  }

  render() {
    const {
      firstName,
      lastName,
      otcPermitted,
      notes,
      primaryDiagnosis,
      secondaryDiagnosis,
      allergy,
      emergencyContact,
      treatment } = this.state.info;
    const { loading, camperID } = this.state
    return loading ? <h3>Loading</h3> :
        <div className="camper-profile">
          <div className="camper-profile--basic">
            <h3>Basic Profile</h3>
            <p>
              Name: {firstName} {lastName}
            </p>
            <p>Primary Diagnosis: {primaryDiagnosis}</p>
            <p>Secondary Diagnosis: {secondaryDiagnosis}</p>
            <p>Is over-the-counter medicine allowed? {otcPermitted ? "Yes" : "No"}</p>
            <p>Allergy: {allergy}</p>
            <p>Notes: {notes}</p>
          </div>

          <div className="camper-profile--emergency">
            <h3>Emergency Contact Info:</h3>
            <p>Name: {emergencyContact.firstName} {emergencyContact.lastName}</p>
            <p>Relationship: {emergencyContact.relationship}</p>
            <p>Email: {emergencyContact.email}</p>
            <p>Phone: {emergencyContact.phone}</p>
          </div>

          <div className="camper-profile--treatment">
            <h3>Treatment</h3>
            <p>Medication: {treatment.medication} {treatment.dosage}</p>
            <p>Date and Time: {treatment.date} {treatment.time}</p>
            <p>Has been administered? {treatment.beenAdministered ? "Yes" : "No"}</p>
            <p>Details: {treatment.details}</p>
          </div>
        </div>;
  }
}

export default CamperProfile
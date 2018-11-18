// incomplete, we provide a few as an example but will fill in the rest if time allows


import React, { Component } from "react"


export default class FormMedicalConditions extends Component {
  constructor(){
    super()
    this.state = {
      aidsHIVBoolean: true,
      aidsHIVDetails: "",
      autismSpectrumBoolean: true,
      autismSpectrumDetails: "",
      asthmaInhalerBoolean: true,
      asthmaInhalerDetails: ""
    };
  }

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.saveMedicalConditions(this.state);
  }

  render(){
    return (
      <div>
        <h3>Medical Conditions</h3>
        <div>Fill out any pre-existing medical conditions</div>
        <div>
          <label htmlFor="aidsHIVBoolean">Aids/HIV</label>
          <select name="aidsHIVBoolean">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="aidsHIVDetails">Details</label>
          <input type="text" name="aidsHIVDetails" />
        </div>

        <div>
          <label htmlFor="autismSpectrumBoolean">Autism Spectrum Disorder</label>
          <select name="autismSpectrumBoolean">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="autismSpectrumDetails">Details</label>
          <input type="text" name="autismSpectrumDetails" />
        </div>

        <div>
          <label htmlFor="asthmaInhalerBoolean">Asthma/Inhaler</label>
          <select name="asthmaInhalerBoolean">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="asthmaInhalerDetails">Details</label>
          <input type="text" name="asthmaInhalerDetails" />
        </div>
        <button onClick={this.handleSubmit}>Save Medical Conditions</button>
      </div>
    )
  }
}
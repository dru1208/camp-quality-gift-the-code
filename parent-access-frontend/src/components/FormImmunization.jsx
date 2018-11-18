import React, { Component } from "react"

export default class FormImmunization extends Component {

  constructor(props){
    super(props)
    this.state = {
      chickenPoxBoolean: true,
      chickenPoxDate: "",
      dipPertTetPolBoolean: true,
      dipPertTetPolDate: "",
      hepBBoolean: true,
      hepBDate: "",
      ipvOpvBoolean: true,
      ipvOpvDate: "",
      mmrBoolean: true,
      mmrDate: "",
      mcv4Boolean: true,
      mcv4Date: "",
      notImmunized: ""
    }
  }

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.saveImmunizations(this.state)
  }

  render(){
    return (
      <div className="immunizationForm">
        <h3>Immunizations</h3>
        <div>
          <label htmlFor="chickenPox">Chicken Pox</label>
          <select name="chickenPox" onChange={this.handleChange("chickenPoxBoolean")}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <input type="date" name="chickenPoxDate" onChange={this.handleChange("chickenPoxDate")} />
        </div>

        <div>
          <label htmlFor="dipPertTetPol">Diptheria, Petussi, Tetanus, Polio</label>
          <select name="dipPertTetPol" onChange={this.handleChange("dipPertTetPolBoolean")}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <input type="date" name="dipPertTetPolDate" onChange={this.handleChange("dipPertTetPolDate")} />
        </div>

        <div>
          <label htmlFor="hepB">Hepatitis B</label>
          <select name="hepB" onChange={this.handleChange("hepBBoolean")}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <input type="date" name="hepBDate" onChange={this.handleChange("hepBDate")}/>
        </div>

        <div>
          <label htmlFor="ipvOpv">Inactive/Oral Polio</label>
          <select name="ipvOpv" onChange={this.handleChange("ipvOpvBoolean")}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <input type="date" name="ipvOpvDate" onChange={this.handleChange("ipvOpvDate")}/>
        </div>


        <div>
          <label htmlFor="mmr">Measles-Mumps-Rubella</label>
          <select name="mmr" onChange={this.handleChange("mmrBoolean")}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <input type="date" name="mmrDate" onChange={this.handleChange("mmrDate")}/>
        </div>

        <div>
          <label htmlFor="mcv4">Meningococcal Meningitis</label>
          <select name="mcv4" onChange={this.handleChange("mcv4Boolean")}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <input type="date" name="mcv4Date" onChange={this.handleChange("mcv4Date")}/>
        </div>


        <div>
          <label htmlFor="notImmunized">Not Immunized Explanation</label>
          <input type="textarea" name="notImmunized" onChange={this.handleChange("notImmunized")}/>
        </div>

        <button onClick={this.handleSubmit}>Save Immunizations</button>
      </div>
    )
  }
}

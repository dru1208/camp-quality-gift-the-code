import React, { Component } from "react"

export default class FormHealthHistory extends Component {
  constructor(props){
    super(props)
    this.state = {
      operationsBoolean: true,
      operationsExplanation: "",
      hospitalizations: "",
      recentDiseases: "",
      activityRestrictions: "",
      specialAssistance: "",
      otherInfo: ""
    }
  }

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.saveHealthHistory(this.state);
  }

  render(){
    return <div>
        <h3>Health History</h3>

        <div className="health-history--container">
          <label>Operations: has your child had any operations?</label>
          <select name="operationsBoolean" onChange={this.handleChange("operationsBoolean")}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="operationsExplanation">
            Please explain the operation(s), including date(s)
          </label>
          <input type="textarea" name="operationsExplanation" onChange={this.handleChange("operationsExplanation")} />
        </div>

        <div className="health-history--container">
          <label htmlFor="hospitalizations">
            Reasons for hospitalizations, including date(s)
          </label>
          <input type="textarea" name="hospitalizations" onChange={this.handleChange("hospitalizations")} />
        </div>

        <div className="health-history--container">
          <label htmlFor="recentDiseases">
            Reasons for recent diseases, including date(s) within the last 3
            months
          </label>
          <input type="textarea" name="recentDiseases" onChange={this.handleChange("recentDiseases")} />
        </div>

        <div className="health-history--container">
          <label htmlFor="activityRestrictions">
            Please explain what activities must be restricted and list any
            special accommodations that should be made.
          </label>
          <input type="textarea" name="activityRestrictions" onChange={this.handleChange("activityRestrictions")} />
        </div>

        <div className="health-history--container">
          <label htmlFor="specialAssistance">
            Will your child require any special assistance while at camp? If
            so, please let us know if mobility devices (wheelchairs,
            crutches, etc) are required.
          </label>
          <input type="textarea" name="specialAssistance" onChange={this.handleChange("specialAssistance")} />
        </div>

        <div className="health-history--container">
          <label htmlFor="otherInfo">
            Is there anything you'd like to discuss with the camp medical
            staff
          </label>
          <input type="textarea" name="otherInfo" onChange={this.handleChange("otherInfo")} />
        </div>

        <button onClick={this.handleSubmit}>Save Health History</button>
      </div>;
  }
}

import React, { Component } from 'react';
import FormHealthHistory from './FormHealthHistory';
import FormImmunization from './FormImmunization';
import FormMedicalConditions from './FormMedicalConditions';
import FormMedication from './FormMedication';

export default class FormHealth extends Component {
  constructor(props){
    super(props)
    this.state = {
      height: "",
      heightUnit: "cm",
      weight: "",
      weightUnit: "",
      healthInsuranceNumber: "",
      healthInsuranceExpiry: "",
      epinephrine: false,
      allergyDescription: "",
      hasDietaryRestriction: false,
      dietaryRestrictionDetails: "",
      hasMedications: false
    }
  }

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value
    })
  }

  render(){
    return <div className="healthForm forms">
        <h2>Form Health</h2>
        <form>
          <div>
            <h3>General Information</h3>
            <div>
              <label htmlFor="height">
                Height
                <input type="number" step="0.1" min="0" onChange={this.handleChange("height")} />
                <select onChange={this.handleChange("heightUnit")}>
                  <option value="cm">centimeters</option>
                  <option value="in">inches</option>
                </select>
              </label>
            </div>

            <div>
              <label htmlFor="weight">
                Weight
                <input type="number" step="0.1" min="0" onChange={this.handleChange("weight")} />
                <select onChange={this.handleChange("weightUnit")}>
                  <option value="kg">kilograms</option>
                  <option value="lb">pounds</option>
                </select>
              </label>
            </div>

            <div>
              <label htmlFor="health_insurance_number">
                Health Insurance Number
              </label>
              <input type="text" name="health_insurance_number" onChange={this.handleChange("healthInsuranceNumber")} required />
            </div>

            <div>
              <label htmlFor="health_insurance_expiry">Expiry date:</label>
              <input type="date" onChange={this.handleChange("healthInsuranceExpiry")} />
            </div>
          </div>
          <div className="allergies">
            <div>
              <label>
                Does your child require epinephrine injector?
                <select onChange={this.handleChange("epinephrine")}>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </label>
            </div>

            <div>
              <label>Date of last reaction</label>
              <input type="date" onChange={this.handleChange("epinephrine")} />
            </div>

            <div>
              <label>
                What are they allergic to and description of their reaction
              </label>
              <br />
              <textarea rows="5" cols="150" onChange={this.handleChange("allergyDescription")} />
            </div>

            <div>
              <label>
                Dietary restrictions
                <select onChange={this.handleChange("hasDietaryRestriction")}>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </label> <br />
              <textarea rows="5" cols="150" onChange={this.handleChange("hasDietaryRestriction")}/>
            </div>
          </div>
          <div>
            <label>Medication</label>
            <select onChange={this.handleChange("hasMedications")}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div>
            <FormMedication />
          </div>
          <div>
            <label htmlFor="treatment">Treatment</label>
            <select name="treatment">
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div>
            <label htmlFor="irregularMeds">Irregular Medicine</label>
            <input type="text" name="irregularMeds" />
            <label htmlFor="whyMedsNecessary">
              If so, why is this medicine necessary
            </label>
            <input type="textarea" name="whyMedsNecessary" />
          </div>
          <div>
            <label htmlFor="noOTC">Prohibited Over the Counter Meds</label>
            <input type="text" name="noOTC" />
          </div>
          <div className="diagnosis">
            <div>
              <label htmlFor="primaryDiagnosis">Primary Diagnosis</label>
              <input type="text" name="primaryDiagnosis" />
            </div>

            <div>
              <label htmlFor="secondaryDiagnosis">
                Secondary Diagnosis
              </label>
              <input type="text" name="secondaryDiagnosis" />
            </div>
          </div>
          <FormHealthHistory />
          <FormMedicalConditions />
          <FormImmunization />
          <input type="submit" name="submit" />
        </form>
      </div>;
  }
}
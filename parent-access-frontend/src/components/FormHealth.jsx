import React, { Component } from 'react';

export default class FormHealth extends Component {
  constructor(props){
    super(props)
    this.state = {
      height: "",
      heightUnit: "cm",
      weight: "",
      weightUnit: "",
      epinephrine: "yes",
      hasDietaryRestriction: "no",
      dietaryRestrictionDetails: "",
      medications: []
    }
  }
  render(){
    const { heightUnit, weightUnit, epinephrine, hasDietaryRestriction } = this.state;
    return (
      <div className="healthForm">
        <h2>Form Health</h2>
        <form>
          <div>
            <h3>General Information</h3>
            <div>
              <label htmlFor="height">Height
                <input value="number" step="0.1" min="0" />
                <select value={heightUnit}>
                  <option value="cm">centimeters</option>
                  <option value="in">inches</option>
                </select>
              </label>
            </div>

            <div>
              <label htmlFor="weight">Weight
                <input value="number" step="0.1" min="0" />
                <select value={weightUnit}>
                  <option value="kg">kilograms</option>
                  <option value="lb">pounds</option>
                </select>
              </label>
            </div>
          </div>

          <div className="allergies">
            <div>
              <label>Does your child require epinephrine injector?
                <select value={epinephrine}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            <div>
              <label>Date of last reaction</label>
              <input type="date" value="2018-11-07"/>
            </div>

            <div>
              <label>What are they allergic to and description of their reaction</label><br/>
              <textarea rows="5" cols="150"/>
            </div>

            <div>
              <label>Dietary restrictions
                <select value={hasDietaryRestriction}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label> <br/>
              <textarea rows="5" cols="150"/>
            </div>
          </div>


  // if true, go on to fill out info about medications and treatment (frequency, schedule, details)
          <div>
            <label htmlFor="medication">Medication</label>
            <select name="medication">
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
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
            <label htmlFor="whyMedsNecessary">If so, why is this medicine necessary</label>
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
              <label htmlFor="secondaryDiagnosis">Secondary Diagnosis</label>
              <input type="text" name="secondaryDiagnosis" />
            </div>
          </div>





        </form>
      </div>);
  }
}
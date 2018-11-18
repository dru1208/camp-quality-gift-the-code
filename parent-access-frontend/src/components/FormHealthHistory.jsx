import React from "react"


const FormHealthHistory = props => (
  <div>
    <div>
      <label>Operations: has your child had any operations?</label>
      <select name="operationsBoolean">
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <label htmlFor="operationsExplanation">Please explain the operation(s), including date(s)</label>
      <input type="textarea" name="operationsExplanation"/>
    </div>


    <div>
      <label htmlFor="hospitalizations">Reasons for hospitalizations, including date(s)</label>
      <input type="textarea" name="hospitalizations" />
    </div>


    <div>
      <label htmlFor="recentDiseases">Reasons for recent diseases, including date(s) within the last 3 months</label>
      <input type="textarea" name="recentDiseases" />
    </div>

    <div>
      <label htmlFor="activityRestrictions">Please explain what activities must be restricted and list any special accommodations that should be made.</label>
      <input type="textarea" name="activityRestrictions" />
    </div>


    <div>
      <label htmlFor="specialAssistance">Will your child require any special assistance while at camp? If so, please let us know if mobility devices (wheelchairs, crutches, etc) are required.</label>
      <input type="textarea" name="specialAssistance" />
    </div>

    <div>
      <label htmlFor="otherInfo">Is there anything you'd like to discuss with the camp medical staff</label>
      <input type="textarea" name="otherInfo" />
    </div>

  </div>
)

export default FormHealthHistory;
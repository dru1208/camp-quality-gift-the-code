// incomplete, we provide a few as an example but will fill in the rest if time allows


import React from "react"


const FormMedicalConditions = props => {
  return (
    <div>

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

    </div>
  )

}

export default FormMedicalConditions;
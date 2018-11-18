import React from "react"


export default const FormImmunization = props => {

  return (
    <div className="immunizationForm">

      <div>
        <label htmlFor="chickenPox"></label>
        <select name="chickenPox">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>

      <div>
        <label htmlFor="dipPertTetPol">Diptheria, Petussi, Tetanus, Polio</label>
        <select name="dipPertTetPol">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>

      <div>
        <label htmlFor="hepB">Hepatitis B</label>
        <select name="hepB">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>

      <div>
        <label htmlFor="ipvOpv">Inactive/Oral Polio</label>
        <select name="ipvOpv">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>


      <div>
        <label htmlFor="mmr">Measles-Mumps-Rubella</label>
        <select name="mmr">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>

      <div>
        <label htmlFor="mcv4">Meningococcal Meningitis</label>
        <select name="mcv4">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>


      <div>
        <label htmlFor="notImmunized">Not Immunized Explanation</label>
        <input type="textarea" name="notImmunized" />
      </div>

    </div>
  )
}
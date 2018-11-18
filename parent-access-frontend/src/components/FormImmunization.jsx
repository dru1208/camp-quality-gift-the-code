import React from "react"


const FormImmunization = props => {

  return (
    <div className="immunizationForm">
      <h3>Immunizations</h3>
      <div>
        <label htmlFor="chickenPox">Chicken Pox</label>
        <select name="chickenPox">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input type="date" name="chickenPoxDate" />
      </div>

      <div>
        <label htmlFor="dipPertTetPol">Diptheria, Petussi, Tetanus, Polio</label>
        <select name="dipPertTetPol">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input type="date" name="dipPertTetPolDate" />
      </div>

      <div>
        <label htmlFor="hepB">Hepatitis B</label>
        <select name="hepB">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input type="date" name="hepBDate" />
      </div>

      <div>
        <label htmlFor="ipvOpv">Inactive/Oral Polio</label>
        <select name="ipvOpv">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input type="date" name="ipvOpvDate" />
      </div>


      <div>
        <label htmlFor="mmr">Measles-Mumps-Rubella</label>
        <select name="mmr">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input type="date" name="mmrDate" />
      </div>

      <div>
        <label htmlFor="mcv4">Meningococcal Meningitis</label>
        <select name="mcv4">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input type="date" name="mcv4Date" />
      </div>


      <div>
        <label htmlFor="notImmunized">Not Immunized Explanation</label>
        <input type="textarea" name="notImmunized" />
      </div>
    </div>
  )
}

export default FormImmunization;
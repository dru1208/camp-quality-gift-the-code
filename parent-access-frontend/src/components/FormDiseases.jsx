// incomplete, we provide a few as an example but will fill in the rest if time allows



import React from "react"


export default const FormDiseases = props => {
  return (
    <div>

      <div>Fill out any pre-existing diseases</div>
      <div>
        <label htmlFor="cancerBoolean">Cancer</label>
        <select name="cancerBoolean">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label htmlFor="cancerDetails">Details</label>
        <input type="text" name="cancerDetails" />
      </div>

      <div>
        <label htmlFor="brainTumourBoolean">Brain Tumour</label>
        <select name="brainTumourBoolean">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label htmlFor="brainTumourDetails">Details</label>
        <input type="text" name="brainTumourDetails" />
      </div>

      <div>
        <label htmlFor="marrowFailureBoolean">Marrow Failure</label>
        <select name="marrowFailureBoolean">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label htmlFor="marrowFailureDetails">Details</label>
        <input type="text" name="marrowFailureDetails" />
      </div>

    </div>
  )

}
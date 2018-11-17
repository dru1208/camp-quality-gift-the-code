import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="parent-profile">
      <h2>Parent Profile</h2>
      <div className="form-info--container">
        <label htmlFor="first_name">First Name:</label>
        <input name="first_name" type="text" required />
      </div>
      <div className="form-info--container">
        <label htmlFor="first_name">Last Name:</label>
        <input name="last_name" type="text" required />
      </div>
      <div className="form-info--container">
        <label htmlFor="preferred_name">Preferred Name:</label>
        <input name="preferred_name" type="text" />
      </div>
      <div className="form-info--container">
        <label htmlFor="birthday">Birthday:</label>
        <input name="birthday" type="date" value="2018-11-17" required />
      </div>
      <div className="form-info--container">
        <label htmlFor="gender">Gender:</label>
        <input name="gender" type="text" required />
      </div>
      <div className="form-info--container">
        <label htmlFor="email">Email:</label>
        <input name="email" type="email" required />
      </div>
      <div className="form-info--container">
        <label htmlFor="job">Job:</label>
        <input name="job" type="text" required />
      </div>
      <div className="form-info--container">
        <label htmlFor="notes">Notes:</label>
        <input name="notes" type="text" />
      </div>

      <div className="parent-profile--household">
        <div className="parent-contacts">

        </div>
      </div>
    </div>
  );
};

export default Signup;

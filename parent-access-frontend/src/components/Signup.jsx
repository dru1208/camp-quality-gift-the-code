import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <form className="signupForm">
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
        <label htmlFor="cellphone_number">Cellphone Number:</label>
        <input name="cellphone_number" type="text" />
      </div>
      <div className="form-info--container">
        <label htmlFor="home_number">Home Number:</label>
        <input name="home_number" type="text" />
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
        <div className="parent-contacts" />
      </div>
    </div>

    <div className="emergency-contact">
      <h2>Emergency Contact</h2>
      {/**
        * For demonstration purposes, only implemented one emergency contact
        **/}
      <div>
        <label htmlFor="contact_first_name">First Name:</label>
        <input type="text" name="contact_first_name" />
      </div>

      <div>
        <label htmlFor="contact_last_name">Last Name:</label>
        <input type="text" name="contact_last_name" />
      </div>

      <div>
        <label htmlFor="contact_relationship">Relationship:</label>
        <input type="text" name="contact_relationship" />
      </div>

      <div>
        <label htmlFor="contact_cell_number">Cellphone number:</label>
        <input type="text" name="contact_cell_number" />
      </div>

      <div>
        <label htmlFor="contact_home_number">Home number:</label>
        <input type="text" name="contact_home_number" />
      </div>

      <div>
        <label htmlFor="contact_work_number">Work number:</label>
        <input type="text" name="contact_work_number" />
      </div>
      </div>
    </form>
    )
};

export default Signup;

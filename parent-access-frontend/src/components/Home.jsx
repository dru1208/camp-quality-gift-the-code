import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return <Fragment>
    <h1>Home page</h1>
    <Link to="/camp_register">Add camp season</Link>{" "}
    <Link to="/view">View Application</Link>{" "}
    <Link to="/edit">Edit Application</Link>{" "}
    <Link to="/week_report">View Season's Report</Link>{" "}
    <Link to="/settings">Settings</Link>{" "}
    <Link to="/logout">Logout</Link>{" "}
  </Fragment>;
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcomePage">
      <h1>Welcome!</h1>
      <Link to="/signup">Sign Up</Link>
      {" "}
      <br />
      <Link to="/login">Log In</Link>
      {" "}
    </div>
  );
}

export default Welcome;

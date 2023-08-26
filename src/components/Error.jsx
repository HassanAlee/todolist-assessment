import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="placeholder">
        <h1>You're lost!</h1>
      </div>
      <div className="lost">
        <Link to={"/"}>Go Back</Link>
      </div>
    </>
  );
};

export default Error;

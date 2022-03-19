import React from "react";
import { Link } from "react-router-dom";

const Hook = () => {
  return (
    <div>
      <Link to="/useState">
        {" "}
        <h2>useState</h2>
      </Link>
      <Link to="/useEffect">
        {" "}
        <h2>useEffect</h2>
      </Link>
      <Link to="/useReducer">
        {" "}
        <h2>useReducer</h2>
      </Link>
      <Link to="/useCallback">
        {" "}
        <h2>useCallback</h2>
      </Link>
      <Link to="/customHooks">
        {" "}
        <h2>Custom Hooks</h2>
      </Link>
    </div>
  );
};

export default Hook;

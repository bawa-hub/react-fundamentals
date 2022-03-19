import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Learn about React fundamentals</h1>
      <Link to="/main-concepts">
        <h3>Main Concepts</h3>
      </Link>
      <Link to="/advanced">
        <h3>Advanced</h3>
      </Link>
      <Link to="/hooks">
        <h3>Hooks</h3>
      </Link>
    </div>
  );
};

export default Home;

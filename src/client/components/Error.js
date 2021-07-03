import React from "react";
import { NavLink } from "react-router-dom";
function Error() {
  return (
    <div style={{ color: "red" }}>
      <h1> Error Page</h1>
      <h2>URL Not Found </h2>
      <NavLink to="/home">
        <h1
          style={{
            color: "red",
            border: "5px solid white",
          }}
        >
          Back Home
        </h1>
      </NavLink>
    </div>
  );
}

export default Error;

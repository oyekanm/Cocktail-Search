import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Nav ">
      <div className="container flex">
        <p className="Nav__name"> CockTails </p>
        <nav>
          <NavLink to="/" className="Nav__link">
            Home
          </NavLink>
          <NavLink to="/about" className="Nav__link">
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

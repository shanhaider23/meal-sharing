import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/MainHeader.css";

const MainHeader = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Meal Sharing App
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/meals"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Meals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/reservation"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Reservation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AddMeals"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                AddMeals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};
export default MainHeader;

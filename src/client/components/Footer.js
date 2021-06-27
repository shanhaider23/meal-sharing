import React from "react";
import "./Footer.css";
import WeatherFetch from "./WeatherFetch";
const Footer = () => (
  <div className="footer">
    <h3>
      Meal Sharing App <br></br> © Project by Shan-e-Haider
    </h3>
    <div className="weather">
      <WeatherFetch />
    </div>
  </div>
);

export default Footer;

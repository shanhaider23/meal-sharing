import React from "react";
import "../styles/Footer.css";
import WeatherFetch from "./WeatherFetch";
const Footer = () => (
  <div className="footer">
    <h6>
      Meal Sharing App <br></br> © Project by Shan-e-Haider
    </h6>
    <div className="weather">
      <WeatherFetch />
    </div>
  </div>
);

export default Footer;

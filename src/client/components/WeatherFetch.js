import React, { useState, useEffect } from "react";

function WeatherFetch() {
  const key = "7f017ec5f13ca815ac4ff4d0135d6c16";

  const [mainTemp, setMainTemp] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Copenhagen,dk&APPID=" +
        key +
        "&units=metric"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setMainTemp(Math.round(data.main.temp));
        setDescription(data.weather[0].description);
      });
  }, []);
  return (
    <>
      <h6>Weather Copenhagen : {mainTemp}°C</h6>
      <h6>Description : {description}</h6>
    </>
  );
}
export default WeatherFetch;

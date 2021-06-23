import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function Reservation() {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/reservations")
      .then((response) => response.json())
      .then((data) => setReservations(data));
    setIsLoading(false);
  });

  return (
    <>
      <div>
        <p className="text"> Reservations</p>
        {reservations.map((reservation) => {
          return (
            <NavLink
              key={reservation.id}
              to={`/reservations/${reservation.id}`}
            >
              <div className="meal-list">
                <h3>Number of Reservations</h3>
                {isLoading}
                {reservation.number_of_guests} <br></br>
                <h3>Name</h3>
                {reservation.name} <br></br>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export default Reservation;

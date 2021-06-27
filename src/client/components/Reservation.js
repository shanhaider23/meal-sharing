import React from "react";
import { useFetch } from "./useMeals";
import { NavLink } from "react-router-dom";
function Reservation() {
  const { data: reservations, isLoading } = useFetch("/api/reservations");

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

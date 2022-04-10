import React from "react";
import { useFetch } from "./useMeals";
import { NavLink } from "react-router-dom";
function Reservation() {
  const { data: reservations, isLoading } = useFetch("/api/reservations");

  return (
    <>
      <div className="container-fluid main-box ms-4">
        <p className="text pt-4"> Reservations</p>
        {reservations.map((reservation) => {
          return (
            <div className="d-inline-flex justify-content-between ">
              <NavLink
                key={reservation.id}
                to={`/reservations/${reservation.id}`}
              >
                <div className="meal-list m-2">
                  {isLoading}

                  <img
                    className="img-meals"
                    src="https://images.unsplash.com/photo-1635548166842-bf67bacbefaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  ></img>
                  <div className="m-4 d-flex justify-content-between">
                    <h5 className="heading-display">Number of Reservations:</h5>
                    <h5 className="heading-input">
                      {reservation.number_of_guests}
                    </h5>
                  </div>

                  <div className="m-4 d-flex justify-content-between">
                    <h5 className="heading-display"> Name:</h5>
                    <h5 className="heading-input">{reservation.name}</h5>
                  </div>
                  <div className="m-4 d-flex justify-content-between">
                    <h5 className="heading-display"> Phone:</h5>
                    <h5 className="heading-input">{reservation.phone}</h5>
                  </div>
                  <div className="m-4 d-flex justify-content-between">
                    <h5 className="heading-display"> Email:</h5>
                    <h5 className="heading-input">{reservation.email}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Reservation;

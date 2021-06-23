import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function MealDiaplay() {
  const [meals, setMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => setMeal(data));
    setIsLoading(false);
  });

  return (
    <>
      <div>
        <p className="text"> For Reservation: Click on Meal </p>
        {meals.map((meal) => {
          return (
            <NavLink key={meal.id} to={`/meals/${meal.id}`}>
              <div className="meal-list">
                {isLoading}
                {meal.title} <br></br>
                {meal.price} Dkk<br></br>
                <img
                  src="https://cdn.pixabay.com/photo/2015/08/19/02/27/restaurant-895427__340.png"
                  alt="Logo"
                  height="64"
                  width="100"
                ></img>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export default MealDiaplay;

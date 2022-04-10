import React from "react";
import { useFetch } from "./useMeals";
import { NavLink } from "react-router-dom";
import MealsImages from "./MealsImages";
import "../styles/MealDisplay.css";
function MealDiaplay() {
  const { data: meals, isLoading } = useFetch("/api/meals");

  return (
    <>
      <div className="container-fluid main-box ms-4">
        <p className="text pt-4"> For Reservation: Click on Meal </p>
        {meals.map((meal) => {
          let imgSrc = "";
          const imageForMeal = MealsImages.find(
            (img) => img.title == meal.title
          );
          if (imageForMeal) {
            imgSrc = imageForMeal.url;
          } else {
            imgSrc =
              "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
          }
          return (
            <div className="d-inline-flex justify-content-between">
              <NavLink key={meal.id} to={`/meals/${meal.id}`}>
                <div className="meal-list m-2">
                  {isLoading}
                  <div className="img-box">
                    <img className="img-meals" src={imgSrc}></img>
                  </div>
                  <div className="m-4 d-flex justify-content-between">
                    <h5 className="heading-display"> Meal Name:</h5>
                    <h5 className="heading-input">{meal.title}</h5>
                  </div>
                  <div className="m-4 d-flex justify-content-between">
                    <h5 className="heading-display"> Meal Price:</h5>
                    <h5 className="heading-input">{meal.price} dkk</h5>
                  </div>
                  <div className="m-4 d-flex justify-content-between">
                    <h5 className="heading-display"> Location:</h5>
                    <h5 className="heading-input">{meal.location}</h5>
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

export default MealDiaplay;

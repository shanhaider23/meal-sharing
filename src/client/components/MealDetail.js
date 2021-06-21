import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReservationForm from "./ReservationForm";
function MealDetail() {
  const { id } = useParams();
  const [filterMeal, setFilterMeal] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/api/meals")
      .then((response) => response.json())
      .then((result) => {
        const newMeals = result.find((meal) => meal.id === parseInt(id));
        setFilterMeal(newMeals.discription);
      });
  }, []);
  return (
    <div>
      <h1 style={{ color: "red" }}>{filterMeal}</h1>
      <ReservationForm />
    </div>
  );
}

export default MealDetail;

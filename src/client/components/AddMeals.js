import React, { useState } from "react";
import "../styles/Addmeal.css";

function AddMeals() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [location, setLocation] = useState("");
  const [when, setWhen] = useState(null);
  const [max_reservations, setReservations] = useState("");
  const [price, setPrice] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  function saveData(e) {
    e.preventDefault();

    let data = {
      title,
      discription,
      location,
      when,
      max_reservations,
      price,
      createdDate,
    };

    // console.warn(data);
    fetch("api/meals", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then((result) => {
        console.warn("result", result);
      });
    });
  }
  return (
    <div className="container form-box">
      <h1 className="pt-4">Add Meal </h1>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Meal Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Meal Description
          </label>
          <input
            type="text"
            name="discription"
            class="form-control"
            id="exampleInputEmail1"
            value={discription}
            required
            onChange={(e) => {
              setDiscription(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Location
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            name="location"
            value={location}
            required
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Maximum Reservation
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            value={max_reservations}
            onChange={(e) => {
              setReservations(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Price
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Created Date
          </label>
          <input
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            name="date"
            value={createdDate}
            onChange={(e) => {
              setCreatedDate(e.target.value);
            }}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={saveData}>
          Save New Meal
        </button>
      </form>
    </div>
  );
}

export default AddMeals;

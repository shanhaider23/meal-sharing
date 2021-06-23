import React, { useState } from "react";

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
    alert("Meal Added");
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
    <div style={{ color: "red" }}>
      <h1>Add Meal </h1>
      <h3>Meal Title</h3>
      <form>
        <input
          type="text"
          name="title"
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br /> <br />
        <h3>Meal Description</h3>
        <input
          type="text"
          name="discription"
          value={discription}
          required
          onChange={(e) => {
            setDiscription(e.target.value);
          }}
        />
        <br /> <br />
        <h3>Location</h3>
        <input
          type="text"
          name="location"
          value={location}
          required
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <br /> <br />
        <h3>Maximum Reservation</h3>
        <input
          type="number"
          name="email"
          value={max_reservations}
          onChange={(e) => {
            setReservations(e.target.value);
          }}
        />
        <br /> <br />
        <h3>Price</h3>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br /> <br />
        <h3>Created Date</h3>
        <input
          type="date"
          name="date"
          value={createdDate}
          onChange={(e) => {
            setCreatedDate(e.target.value);
          }}
        />
        <br /> <br />
        <button type="submit" onClick={saveData}>
          Save New Meal
        </button>
      </form>
    </div>
  );
}

export default AddMeals;

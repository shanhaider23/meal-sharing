import React, { useState } from "react";

function ReservationForm() {
  const [number_of_guests, setNumberOfGuests] = useState("");
  const [meal_id, setmealId] = useState(null);
  const [created_date, setCreatedDate] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  function saveData(e) {
    e.preventDefault();
    let data = {
      number_of_guests,
      meal_id,
      created_date,
      email,
      phone,
      name,
    };
    // console.warn(data);

    fetch("/api/reservations", {
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
      <h1>Add New Reservation</h1>
      <h3>Number of Guest</h3>
      <input
        type="number"
        name="name"
        value={number_of_guests}
        onChange={(e) => {
          setNumberOfGuests(e.target.value);
        }}
      />
      <br /> <br />
      <h3>Email</h3>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br /> <br />
      <h3>Phone Number</h3>
      <input
        type="number"
        name="email"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br /> <br />
      <h3>Full Name</h3>
      <input
        type="text"
        name="email"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br /> <br />
      <button type="button" onClick={saveData}>
        Save New Reservation
      </button>
    </div>
  );
}

export default ReservationForm;

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
    <div className="container form-box">
      <h1>Add New Reservation</h1>
      <div class="mt-3">
        <label for="exampleInputEmail1" class="form-label">
          Full Name
        </label>
        <input
          type="text"
          name="email"
          class="form-control"
          id="exampleInputEmail1"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div class="mt-3">
        <label for="exampleInputEmail1" class="form-label">
          Number of Guest
        </label>
        <input
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          value={number_of_guests}
          onChange={(e) => {
            setNumberOfGuests(e.target.value);
          }}
        />
      </div>
      <div class="mt-3">
        <label for="exampleInputEmail1" class="form-label">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div class="mt-3 mb-4">
        <label for="exampleInputEmail1" class="form-label">
          Phone Number
        </label>
        <input
          type="number"
          name="number"
          class="form-control"
          id="exampleInputEmail1"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>

      <button type="submit" class="btn btn-primary" onClick={saveData}>
        Save New Reservation
      </button>
    </div>
  );
}

export default ReservationForm;

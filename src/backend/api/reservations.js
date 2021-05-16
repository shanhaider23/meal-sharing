const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservations");
    response.send(reservations);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const Id = parseInt(request.params.id);
    const selectedMeal = await knex("reservations").where("id", Id);
    response.send(selectedMeal[0]);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    const newReservations = await knex("reservations").insert(request.body);
    response.json(newReservations);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const ID = request.params.id;
    const updatedReservation = await knex("reservations")
      .where("id", ID)
      .update(request.body);
    response.json(updatedReservation);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const ID = request.params.id;
    const deletedReservation = await knex("reservations").where("id", ID).del();
    response.json(deletedReservation);
  } catch (error) {
    error;
  }
});

module.exports = router;

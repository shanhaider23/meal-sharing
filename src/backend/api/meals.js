const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    if ("maxPrice" in request.query) {
      const maxPrice = Number(request.query.maxPrice);
      const mealPrice = await knex("meals").where("price", "<=", maxPrice);
      response.send(mealPrice);
      return;
    }

    if ("createdAfter" in request.query) {
      const createdAfter = Date.parse(request.query.createdAfter);
      const mealDate = await knex("meals").where(
        "created_date",
        ">=",
        createdAfter
      );
      response.send(mealDate);
      return;
    }
    if ("availableReservations" in request.query) {
      const availableReservations = Boolean(
        request.query.availableReservations
      );
      const sortedReservations = await knex
        .from("meals")
        .join("reservations", "meals.id", "=", "reservations.id")
        .select("meals.title")
        .where(
          ("max_reservations" - "reservations.number_of_guests", true),
          availableReservations
        );
      response.send(sortedReservations);
      return;
    }

    if ("title" in request.query) {
      const title = request.query.title;
      const getTitle = await knex("meals").where(
        "title",
        "like",
        "%" + title + "%"
      );
      response.send(getTitle);
      return;
    }

    if ("limit" in request.query) {
      const limit = request.query.limit;
      const getNumber = await knex("meals").limit(limit);
      response.send(getNumber);
      return;
    }

    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meals");
    response.send(titles);
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (request, response) => {
  try {
    const iD = request.params.id;
    const selectedMeal = await knex("meals").where("id", iD);
    response.send(selectedMeal[0]);
  } catch (error) {
    throw error;
  }
})

router.post("/", async (request, response) => {
  try {
    const meals = await knex("meals").insert(request.body);
    response.json(meals);
  } catch (error) {
    throw error;
  }
})

router.put("/:id", async (request, response) => {
  try {
    const selectedId = request.params.id;
    const Selectedmeal = await knex("meals").where("id", selectedId).update(request.body)
    response.json(Selectedmeal);
  } catch (error) {
    throw error;
  }
})

router.delete("/:id", async (request, response) => {
  try {
    const deletedID = request.params.id;
    const selectedmeal = await knex("meals").where("id", deletedID).del();
    response.json(selectedmeal);
  } catch (error) {
    throw error;
  }
})

module.exports = router;

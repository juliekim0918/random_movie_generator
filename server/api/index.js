const { db, Movie } = require("../db/main");
const express = require("express");
const app = express.Router();
const faker = require("faker");
const { response } = require("..");

//GET /api/movies
app.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.send(movies);
  } catch (error) {
    next(error);
  }
});

//POST /api/movies
app.post("/", async (req, res, next) => {
  try {
    const newMovie = await Movie.create({
      title: faker.commerce.catchPhrase(),
    });
    res.send(newMovie);
  } catch (error) {
    next(error);
  }
});

//DELETE /api/movies/:id
app.delete("/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    await movie.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = app;

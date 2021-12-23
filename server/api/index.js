const { db, Movie } = require("../db/main");
const express = require("express");
const app = express.Router();
const faker = require("faker");
const { response } = require("..");

//GET /api/movies
app.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.send(movies);
  } catch (error) {
    next(error);
  }
});

//GET /api/movies/:id
app.get("/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    res.send(movie);
  } catch (error) {
    next(error);
  }
});

app.put("/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    await movie.update(req.body);
    res.send(movie);
  } catch (error) {
    // next(error);
    if (error.name === "SequelizeValidationError") {
      console.log(error.errors.map((e) => e.validatorKey));
      return res.status(400).json({
        msg: error.errors.map((e) => e.message),
        key: error.errors.map((e) => e.validatorKey),
      });
    } else {
      next(new ErrorResponse(`Sorry, couldnt update rating`, 400));
    }
  }
});

//POST /api/movies
app.post("/", async (req, res, next) => {
  try {
    const newMovie = await Movie.create({
      title: faker.company.catchPhrase(),
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

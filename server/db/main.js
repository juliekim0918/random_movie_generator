const db = require("./db");
const Movie = require("./Movie");

const syncAndSeed = async () => {
  await Movie.create({
    title: "A New Movie Thats Fun",
  });
};

module.exports = {
  db,
  Movie,
  syncAndSeed,
};

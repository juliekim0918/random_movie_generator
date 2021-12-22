const { db, Movie } = require("../server/db/main");
const { expect } = require("chai");

let movies;
beforeEach(async () => {
  await Movie.create({ title: "fake title" });
  movies = await Movie.findAll();
});

afterEach(async () => {
  await Movie.destroy({
    where: {},
    truncate: true,
  });
});

describe("Models", () => {
  describe("the Movie model", () => {
    it("exists", () => {
      expect(movies).to.be.ok;
    });
    it('has a column name of "title"', () => {
      expect(movies[0].dataValues.title).to.be.ok;
    });
    it("has a column name of rating", () => {
      expect(movies[0].dataValues.rating).to.be.ok;
    });
    it("the ratings default value is 3", () => {
      const rating = movies[0].dataValues.rating;
      expect(rating).to.equal(3);
    });
  });
});

const db = require("./db");
const Sequelize = require("sequelize");
const { STRING, INTEGER } = Sequelize.DataTypes;

const Movie = db.define("movie", {
  title: {
    type: STRING,
    allowNull: false,
  },
  rating: {
    type: INTEGER,
    defaultValue: 3,
  },
});

module.exports = Movie;

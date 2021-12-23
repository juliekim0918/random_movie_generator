const express = require("express");
const app = express();
const path = require("path");
const { db, syncAndSeed } = require("./db/main");
const PORT = process.env.PORT || 3000;
const volleyball = require("volleyball");

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));
app.use("/api/movies", require("./api"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const init = async () => {
  try {
    await db.sync({ force: true });
    await syncAndSeed();
    app.listen(PORT, () =>
      console.log(`

          Listening on port ${PORT}

          http://localhost:${PORT}/

      `)
    );
  } catch (err) {
    console.log(`There was an error starting up!`, err);
  }
};

module.exports = app;

init();

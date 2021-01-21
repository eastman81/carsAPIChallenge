// Dependencies
const express = require("express");
const path = require("path");
const cars = require('./carRoutes');

// Sets up the Express App
const PORT = 3000;

const app = express();
app.use(cars());

// Routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// Starts the server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

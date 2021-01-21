// Dependencies
const express = require("express");
const path = require("path");
const cars = require('./carRoutes');

const PORT = 3000;

// Sets up the Express App
const app = express();
app.use(cars());

// Route for HTML
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// Starts the server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cars (dummy data)
const cars = [
  {
    Make: "Toyota",
    Model: "4-Runner",
    Package: "SR5",
    Color: "Blue",
    Year: 2003,
    Category: "SUV",
    Milage: 150000,
    Price: 2000000,
    Id: "123abc",
  },
  {
    Make: "Dodge",
    Model: "Challenger",
    Package: "sport",
    Color: "Blue",
    Year: 2019,
    Category: "car",
    Milage: 10000,
    Price: 2000000,
    Id: "456fge",
  },
];

// Routes
app.get("/api/cars", function (req, res) {
  return res.send(cars);
});

app.get("/api/cars/:Id", function (req, res) {
  const chosenCar = req.query.Id;

  for (let i = 0; i < cars.length; i++) {
    if (chosenCar === cars[i].Id) {
      return res.send(cars[i]);
    }
  }

  return res.send(`No cars found by ID: ${chosenCar}`);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

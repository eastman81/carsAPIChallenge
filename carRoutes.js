const { Router } = require("express");
const axios = require("axios");

module.exports = (router = new Router()) => {
  router.get("/api/cars", function (req, res) {
    return axios
      .get("http://localhost:3001/api/cars")
      .then((result) => {
        res.send(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  router.get("/api/cars/:Id", function (req, res) {
    return axios
      .get("http://localhost:3001/api/cars/:Id", {
        params: { ...req.query, Id: req.params.Id },
      })
      .then((result) => {
        res.send(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return router;
};

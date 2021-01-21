const express = require("express");
const request = require("supertest");
const moxios = require("moxios");

const cars = require("./carRoutes");

const initCarRoutes = () => {
  const app = express();
  app.use(cars());
  return app;
};

describe("GET /cars", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("It should fetch car information", async () => {
    moxios.stubRequest("http://localhost:3001/api/cars", {
      status: 200,
      response: {
        Make: "Toyota",
        Model: "4-Runner",
        Package: "SR5",
        Color: "Blue",
      },
    });

    const app = initCarRoutes();
    await request(app).get("/api/cars");

    expect(moxios.requests.mostRecent().url).toBe(
      "http://localhost:3001/api/cars"
    );
  });

  test("It should 200 and return the response", async () => {
    moxios.stubRequest("http://localhost:3001/api/cars", {
      status: 200,
      response: {
        Make: "Toyota",
        Model: "4-Runner",
        Package: "SR5",
        Color: "Blue",
      },
    });

    const app = initCarRoutes();
    const res = await request(app).get("/api/cars");

    expect(res.body).toEqual({
      Make: "Toyota",
      Model: "4-Runner",
      Package: "SR5",
      Color: "Blue",
    });
  });

  test("It should return correct info on specific request", async () => {
    const expectedResponse = {
      Make: "Toyota",
      Model: "4-Runner",
      Package: "SR5",
      Color: "Blue",
      Year: 2003,
      Category: "SUV",
      Milage: 150000,
      Price: 2000000,
      Id: "123abc",
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedResponse });
    });

    const app = initCarRoutes();
    const res = await request(app).get("/api/cars/:Id");

    expect(res.body).toEqual(expectedResponse);
  });
});

const supertest = require("supertest");
const { app } = require("../src/server"); // Import the app directly

const request = supertest(app);

describe("Testing server", () => {
  test("Should return status of 200 when valid name is given", async () => {
    let response = await request.get("/person/Duke");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('{"name":"Duke"}');
  });

  test("Should return status of 404 when invalid route is given", async () => {
    let response = await request.get("/people");
    expect(response.status).toEqual(404);
    expect(response.text).toEqual("Not Found");
  });

  test("Should return status of 404 when invalid method is given", async () => {
    let response = await request.post("/person/Duke");
    expect(response.status).toEqual(404);
  });

  test("Should return a 500 when an invalid name is given", async () => {
    let response = await request.get("/person/Mary");
    expect(response.status).toEqual(500);
    expect(response.text).toEqual("Try another name in G.I. Joe");
  });
});

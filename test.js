let request = require("supertest");
let app = require("./server/app");

describe("Test server routes", () => {

  test('It should return a truthy response to the /test path', async () => {
    let response = await request(app).get("/test");
    expect(response).toBeTruthy();
  })
});

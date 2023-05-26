const supertest = require("supertest");
const app = require("./server.js");
const request = require("supertest");

describe("Test /", () => {
    test("running fine ", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    })
})
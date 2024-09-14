import { app } from "../src/app.js";
import request from "supertest";

test("jest works", () => {
  expect(true).toBe(true);
});
test("supertest works", (done) => {
  request(app).get("/").expect(200, "hello world!", done);
});

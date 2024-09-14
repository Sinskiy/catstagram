import { app } from "../src/app.js";
import request from "supertest";
import { test, expect } from "@jest/globals";

test("jest works", () => {
  expect(true).toBe(true);
});
test("supertest works", (done) => {
  request(app).get("/").expect(200, "hello world!", done);
});

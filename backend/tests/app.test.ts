import request from "supertest";
import { describe, it, expect, afterAll } from "vitest";

import app, { server } from "#app";

describe("Test the root path", () => {
  afterAll(() => {
    server.close();
  });

  it("should return a 200 status and a welcome message for GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Welcome to the first initial home page!");
  });
});

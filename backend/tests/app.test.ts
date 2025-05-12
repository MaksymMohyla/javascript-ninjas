import request from "supertest";
import { describe, it, expect, afterAll } from "vitest";

import app, { server } from "#app";

const baseUrl = "/api/superheroes";

describe("Test GET ALL method", () => {
  afterAll(() => {
    server.close();
  });

  it("should return a 200 status and array of all superheroes for a basic GET", async () => {
    const response = await request(app).get(baseUrl);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[1]).toHaveProperty("nickname");
  });
});

describe("Test GET /list pagination", () => {
  it("should return 4 superheroes for default pagination", async () => {
    const response = await request(app).get(`${baseUrl}/list`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(4);
  });

  it("should return superheroes from 4th to 8th when page=2", async () => {
    const response = await request(app).get(`${baseUrl}/list?page=2`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(4);
    expect(response.body[0]).toHaveProperty("id");
  });
});

describe("Test GET /totalPages", () => {
  it("should return the correct total number of pages", async () => {
    const response = await request(app).get(`${baseUrl}/totalPages`);
    expect(response.status).toBe(200);
    expect(typeof response.body.pages).toBe("number");
    expect(response.body.pages).toBeGreaterThan(0);
  });
});

describe("Test GET /:id", () => {
  it("should return a single superhero object when given a valid ID", async () => {
    const response = await request(app).get(`${baseUrl}/28`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nickname");
  });

  it("should return 404 for a non-existent superhero", async () => {
    const response = await request(app).get(`${baseUrl}/999`);
    expect(response.status).toBe(404);
  });
});

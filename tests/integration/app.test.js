const request = require("supertest");
const app = require("../../src/server");

describe("GET /hello", () => {
  it("should return Hello world", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should return Hello world! From [name] when name is provided", async () => {
    const testName = "Alice";
    const res = await request(app).get(`/hello/${testName}`);
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe(`Hello world! From ${testName}`);
  });
});

describe("POST /hello", () => {
  it("should return Hello world", async () => {
    const res = await request(app).post("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should return Hello world! From [name] when name is provided in header", async () => {
    const testName = "Bob";
    const res = await request(app).post("/hello").set("x-name", testName);
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe(`Hello world! From ${testName}`);
  });
});

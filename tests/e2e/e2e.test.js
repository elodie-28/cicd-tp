const axios = require("axios");
const app = require("../../src/server");
let server;
let baseURL;

beforeAll((done) => {
  server = app.listen(0, () => {
    const { port } = server.address();
    baseURL = `http://127.0.0.1:${port}`;
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe("E2E GET /hello", () => {
  it("responds with Hello world", async () => {
    const res = await axios.get(`${baseURL}/hello`);
    expect(res.status).toBe(200);
    expect(res.data).toBe("Hello world!");
  });

  it("responds with Hello world! From [name] when name is provided", async () => {
    const testName = "Alice";
    const res = await axios.get(`${baseURL}/hello/${testName}`);
    expect(res.status).toBe(200);
    expect(res.data).toBe(`Hello world! From ${testName}`);
  });
});

describe("E2E POST /hello", () => {
  it("responds with Hello world", async () => {
    const res = await axios.post(`${baseURL}/hello`);
    expect(res.status).toBe(200);
    expect(res.data).toBe("Hello world!");
  });

  it("responds with Hello world! From [name] when name is provided in header", async () => {
    const testName = "Bob";
    const res = await axios.post(`${baseURL}/hello`, {}, {
      headers: {
        "x-name": testName
      }
    });
    expect(res.status).toBe(200);
    expect(res.data).toBe(`Hello world! From ${testName}`);
  });
});

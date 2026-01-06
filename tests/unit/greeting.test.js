const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("returns the hello world message", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("returns the hello world message with name when name is provided", () => {
    const testName = "Charlie";
    expect(getGreeting(testName)).toBe(`Hello world! From ${testName}`);
  });
});

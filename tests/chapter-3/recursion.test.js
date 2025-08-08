const {
  greet,
  greet2,
  factorial,
  factorialIterative,
} = require("../../chapter-3/recursion");

describe("greet and greet 2 functions", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("greet2 logs the correct messages and calls greet", () => {
    greet2("Bob");
    expect(consoleSpy).toHaveBeenCalledWith("\n--- Stack Demo ---");
    expect(consoleSpy).toHaveBeenCalledWith("Greet 2");
    expect(consoleSpy).toHaveBeenCalledWith("Greet");
    expect(consoleSpy).toHaveBeenCalledWith("Name: Bob");
  });
});

describe("factorial (recursive)", () => {
  test("factorial of 0 and 1 should return 1", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  test("factorial of 5 should return 120", () => {
    expect(factorial(5)).toBe(120);
  });
});

describe("factorialIterative (iterative)", () => {
  test("factorialIterative of 0 and 1 should return 1", () => {
    expect(factorialIterative(0)).toBe(1);
    expect(factorialIterative(1)).toBe(1);
  });

  test("factorialIterative of 6 should return 720", () => {
    expect(factorialIterative(6)).toBe(720);
  });

  test("factorialIterative of 10 should resturn 3628800", () => {
    expect(factorialIterative(10)).toBe(3628800);
  });
});
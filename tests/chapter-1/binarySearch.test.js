const {
  maxBinarySearchSteps,
  doubleListSizeAndGetSteps,
} = require("../../chapter-1/binarySearch.js");

describe("maxBinarySearchSteps", () => {
  test("should return 7 for 128 items", () => {
    expect(maxBinarySearchSteps(128)).toBe(7);
  });

  test("should return 10 for 1000 items", () => {
    expect(maxBinarySearchSteps(1000)).toBe(10);
  });

  test("should return 0 for 0 items", () => {
    expect(maxBinarySearchSteps(0)).toBe(-Infinity);
  });
});

describe("doubleListSizeAndGetSteps", () => {
  test("should return 8 for 128 (since 128 * 2 = 256)", () => {
    expect(doubleListSizeAndGetSteps(128)).toBe(8);
  });

  test("should return 11 for 1000 (since 2000)", () => {
    expect(doubleListSizeAndGetSteps(1000)).toBe(11);
  });
});
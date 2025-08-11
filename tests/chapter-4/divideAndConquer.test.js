const {
  sum,
  countItems,
  findMax,
  binarySteps,
} = require("../../chapter-4/divideAndConquer");

describe("sum", () => {
  test("returns 0 for empty array", () => {
    expect(sum([])).toBe(0);
  });

  test("returns sum of positive numbers", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  test("returns sum with negative numbers", () => {
    expect(sum([-1, 5, -3])).toBe(1);
  });
});

describe("countItems", () => {
  test("returns 0 for empty array", () => {
    expect(countItems([])).toBe(0);
  });

  test("returns count for multiple elements", () => {
    expect(countItems([10, 20, 30])).toBe(3);
  });

  test("works with mixed data types", () => {
    expect(countItems([1, "two", { three: 3 }])).toBe(3);
  });
});

describe("findMax", () => {
  test("returns single value for single-element array", () => {
    expect(findMax([42])).toBe(42);
  });

  test("find max in a sorted array", () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
  });

  test("find max in a unsorted array", () => {
    expect(findMax([3, 9, 2, 5, 11, 4])).toBe(11);
  });

  test("handles negative numbers", () => {
    expect(findMax([-5, -1, -10])).toBe(-1);
  });
});

describe("binarySteps", () => {
  test("returns 0 for n <= 1", () => {
    expect(binarySteps(0)).toBe(0);
    expect(binarySteps(1)).toBe(0);
  });

  test("returns correct steps for powers of two", () => {
    expect(binarySteps(2)).toBe(1);
    expect(binarySteps(4)).toBe(2);
    expect(binarySteps(8)).toBe(3);
    expect(binarySteps(128)).toBe(7);
  });

  test("works with non-powers of two", () => {
    expect(binarySteps(10)).toBe(4);
  });
});

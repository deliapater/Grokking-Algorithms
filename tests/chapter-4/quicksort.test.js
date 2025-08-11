const { normalize } = require("path");
const {
  doubleElements,
  doubleFirstElement,
  multiplicationTable,
} = require("../../chapter-4/quicksort");

describe("doubleElements", () => {
  test("doubles each element in an array of positive numbers", () => {
    expect(doubleElements([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
  });

  test("doubles each element in an array with negative numbers", () => {
    expect(doubleElements([-1, 0, 5])).toEqual([-2, 0, 10]);
  });

  test("returns an empty arra when given an empty array", () => {
    expect(doubleElements([])).toEqual([]);
  });
});

describe("doubleFirstElement", () => {
  test("doubles only the first element", () => {
    expect(doubleFirstElement([1, 2, 3, 4])).toEqual([2, 2, 3, 4]);
  });

  test("works with a single-element array", () => {
    expect(doubleFirstElement([5])).toEqual([10]);
  });

  test("returns an empty array if input is empty", () => {
    expect(doubleFirstElement([])).toEqual([]);
  });

  test("does not mutate the original array", () => {
    const original = [1, 2, 3];
    doubleFirstElement(original);
    expect(original).toEqual([1, 2, 3]);
  });
});

describe("multiplicationTable", () => {
  const normalizeZeros = (table) =>
    table.map((row) => row.map((val) => (Object.is(val, -0) ? 0 : val)));

  test("returns correct multiplication table for simple array", () => {
    expect(multiplicationTable([2, 4])).toEqual([
      [4, 8],
      [8, 16],
    ]);
  });

  test("returns correct table for mixed positive and negative numbers", () => {
    const result = normalizeZeros(multiplicationTable([-1, 0, 3]));
    expect(result).toEqual([
      [1, 0, -3],
      [0, 0, 0],
      [-3, 0, 9],
    ]);
  });

  test("retuns empty array if input is empty", () => {
    expect(multiplicationTable([])).toEqual([]);
  });
});
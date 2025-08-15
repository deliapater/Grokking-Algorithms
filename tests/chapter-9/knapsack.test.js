const { knapsack } = require("../../chapter-9/knapsack");

describe("knapsack", () => {
  let sampleItems;

  beforeEach(() => {
    sampleItems = [
      { name: "Water", weight: 3, value: 10 },
      { name: "Book", weight: 1, value: 3 },
      { name: "Food", weight: 2, value: 9 },
      { name: "Jacket", weight: 2, value: 5 },
      { name: "Camera", weight: 1, value: 6 },
    ];
  });

  test("returns the correct optimal set of items within the capacity limit", () => {
    const result = knapsack(sampleItems, 6);
    expect(result.map((item) => item.name)).toEqual([
      "Water",
      "Food",
      "Camera",
    ]);
  });

  test("returns an empty array when capacity is zero", () => {
    const result = knapsack(sampleItems, 0);
    expect(result).toEqual([]);
  });

  test("returns the most valuable single item if capacity allows only one", () => {
    const result = knapsack(sampleItems, 1);
    expect(result).toEqual([{ name: "Camera", weight: 1, value: 6 }]);
  });

  test("handles empty list of items", () => {
    const result = knapsack([], 10);
    expect(result).toEqual([]);
  });

  test("returns correct items when capacity equals total weight of all items", () => {
    const totalWeight = sampleItems.reduce((sum, i) => sum + i.weight, 0);
    const result = knapsack(sampleItems, totalWeight);
    expect(result).toEqual(sampleItems);
  });
});

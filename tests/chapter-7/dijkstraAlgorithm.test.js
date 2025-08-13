const { findLowestCostNode } = require("../../chapter-7/dijkstraAlgorithm");

describe("findLowestCostNode", () => {
  let costs;
  let processed;

  beforeEach(() => {
    costs = { a: 6, b: 2, fin: Infinity };
    processed = new Set();
  });

  test("returns the node with the lowest cost when none are processed", () => {
    expect(findLowestCostNode(costs, processed)).toBe("b");
  });

  test("skips already processed nodes", () => {
    costs.fin = 3;
    processed.add("b");
    expect(findLowestCostNode(costs, processed)).toBe("fin");
  });

  test("returns null whrn all nodes are processed", () => {
    processed.add("a").add("b").add("fin");
    expect(findLowestCostNode(costs, processed)).toBeNull();
  });

  test("handles ties by returning the first lowest-cost node found", () => {
    costs.a = 2;
    const result = findLowestCostNode(costs, processed);
    expect(["a", "b"]).toContain(result);
  });
});
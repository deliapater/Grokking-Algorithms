/**
 * Exercise 7.1
 * ---------------
 * Finds the node with the lowest cost from a given cost tabe
 * @param {Object} costs - A map pf odes to their costs
 * @param {Set}  processed - A set of nodes that have already been processed
 * @returns {string|null} -  The node with the lowest cost, or null if all nodes are processed
 */

function findLowestCostNode(costs, processed) {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (const node in costs) {
    const cost = costs[node];
    if (cost < lowestCost && !processed.has(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

const costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};

const processed = new Set();
console.log("\n---Dijkrtra Algorithm Demo ---");
console.log(findLowestCostNode(costs, processed));

module.exports = {
  findLowestCostNode
}
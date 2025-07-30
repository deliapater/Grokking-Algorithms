/**
 * Exercise 9.2
 * ---------------
 * @typedef {Object} Item
 * @property {string} name - Name of the item
 * @property {number} weight - Weight of the item (in lbs)
 * @property {number} value - Value of the item
 *
 * Solves the 0/1 Knapsack problem using dynamic programing.
 * @param {Item[]} items - List of items
 * @param {number}  capacity - Max weight capacity of the knapsack
 * @returns {Item[]} -  Item chosen to maximize value
 */

function knapsack(items, capacity) {
  const n = items.length;
  const maxValueTable = Array.from({ length: n + 1 }, () =>
    Array(capacity + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    const { weight, value } = items[i - 1];
    for (let w = 0; w <= capacity; w++) {
      if (weight > w) {
        maxValueTable[i][w] = maxValueTable[i - 1][w];
      } else {
        maxValueTable[i][w] = Math.max(
          maxValueTable[i - 1][w],
          maxValueTable[i - 1][w - weight] + value
        );
      }
    }
  }

  const chosenItems = [];
  let w = capacity;
  for (let i = n; i > 0 && w >= 0; i--) {
    if (maxValueTable[i][w] !== maxValueTable[i - 1][w]) {
      const item = items[i - 1];
      chosenItems.push(item);
      w -= item.weight;
    }
  }
  return chosenItems.reverse();
}

const items = [
  { name: "Water", weight: 3, value: 10 },
  { name: "Book", weight: 1, value: 3 },
  { name: "Food", weight: 2, value: 9 },
  { name: "Jacket", weight: 2, value: 5 },
  { name: "Camera", weight: 1, value: 6 },
];
console.log("Packed Items:");
const packed = knapsack(items, 6);
console.log(packed.map((item) => item.name));
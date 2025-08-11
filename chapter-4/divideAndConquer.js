/**
 * Exercise 4.1
 * ---------------
 * Sum Function
 * @param {number[]} Array of numbers
 * @returns {number} Total sum
 */
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
}

/** Exercise 4.2
 * ---------------
 * Recursively counts the number of elements in an array.
 * @param {any[]} arr - The rray to count items in
 * @returns {number} The number of items
 */
function countItems(arr) {
  if (arr.length === 0) return 0;
  return 1 + countItems(arr.slice(1));
}

/**
 * Exercise 4.3
 * ---------------
 * Recursively finds the maximum number in a array
 * @param {number []} arr - Array of numbers
 * @returns {number} Maximum value
 */
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  const subMax = findMax(arr.slice(1));
  return arr[0] > subMax ? arr[0] : subMax;
}

/**
 * Exercise 4.4
 * ---------------
 * Recursively calculates the max number of steps for binary search
 * @param {number} n - Numver of items in the list
 * @returns {number} Max steps
 */
function binarySteps(n) {
  if (n <= 1) return 0;
  return 1 + binarySteps(n / 2);
}

module.exports = {
  sum,
  countItems,
  findMax,
  binarySteps,
};

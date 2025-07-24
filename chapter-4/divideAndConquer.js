/**
 * Excersice 4.1
 * ---------------
 * Sum Function
 * @param {number[]} Array of numbers
 * @returns {number} Total sum
 */
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
}
console.log("\n--- Array Sum Demo ---");
console.log(sum([1, 2, 3, 4]));

/** Excercise 4.2
 * ---------------
 * Recursively counts the number of elements in an array.
 * @param {any[]} arr - The rray to count items in
 * @returns {number} The number of items
 */
function countItems(arr) {
  if (arr.length === 0) return 0;
  return 1 + countItems(arr.slice(1));
}

console.log("\n--- Number of Items Demo ---");
console.log(countItems([10, 20, 30, 40]));

/**
 * Excervise 4.3
 * ---------------
 * Recursively finds the maximum number in a array
 * @param {number []} arr - Array of numbers
 * @returns {number} Maximum value
 */
function findMax(arr) {
  if (arr.length === 1) {
    return [0];
  }
  const subMax = findMax(arr.slice(1));
  return arr[0] > subMax ? arr[0] : subMax;
}
console.log("\n--- Max Number Demo ---");
console.log(findMax([3, 9, 2, 5, 11, 4]));

/**
 * Excercise 4.4
 * ---------------
 * Recursively calculates the max number of steps for binary search
 * @param {number} n - Numver of items in the list
 * @returns {number} Max steps
 */
function binarySteps(n) {
  if (n <= 1) return 0;
  return 1 + binarySteps(n / 2);
}
console.log("\n--- Binary Steps Demo ---");
console.log(binarySteps(128));

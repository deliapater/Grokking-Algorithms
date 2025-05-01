/**
 * Binary search works by diving the list in half each time. The maximum number of guesses is the number of times you can divide the list in half before you get to just 1 item.
 * @param {number} n
 * @returns {number}
 */

function maxBinarySearchSteps(n) {
  // Math.ceil() is a buit-in JavaScript function that rounds a number up to the nearest integer. It always returns the smallest integer greater than or equal to the given number.
  return Math.ceil(Math.log2(n));
}
console.log(maxBinarySearchSteps(128));

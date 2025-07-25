/**
 * Exercise 4.5
 * ---------------
 * O(n linear) - Linear Time
 * @param {Array<any>} arr - The array of elements to print
 */

const arr = [1, 2, 3, 4, 5];
console.log("\n---Array of elements Demo ---");
arr.forEach((value) => {
  console.log(value);
});

/**
 * Exercise 4.6
 * ---------------
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} - New array with each element doubled
 */
function doubleElements(arr) {
  return arr.map((num) => num * 2);
}
console.log("\n---Array of elements doubled Demo ---");
console.log(doubleElements([1, 2, 3, 4]));

/**
 * Exercise 4.7
 * ---------------
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} - New array with only the first element doubled
 */
function doubleFirstElement(arr) {
  if (arr.length === 0) return [];

  const newArr = [...arr];
  newArr[0] = newArr[0] * 2;
  return newArr;
}
console.log("\n---Array of first element doubled Demo ---");
console.log(doubleFirstElement([1, 2, 3, 4]));

/**
 * Exercise 4.8
 * ---------------
 * @param {number[]} arr - Array of numbers
 * @returns {number[][]} - 2D array where each row is arr multitplied by one element of arr
 */
function multiplicationTable(arr) {
  const table = [];

  for (let i = 0; i < arr.length; i++) {
    const row = arr.map((num) => num * arr[i]);
    table.push(row);
  }
  return table;
}
console.log("\n---Multiplication Table Demo ---");
console.log(multiplicationTable([2, 4, 5, 8]));

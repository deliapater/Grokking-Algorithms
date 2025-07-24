/**
 * Excersice 4.1
 * Sum Function
 * @param {number[]} Array of numbers
 * @returns {number} Total sum
 */
function sum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));
}
console.log("\n--- Array Sum Demo ---");
console.log(sum([1,2,3,4]))

/** Excercise 4.2
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
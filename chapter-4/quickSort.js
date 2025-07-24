/**
 * Excersice 4.1
 * Sum Function
 * @param{number[]} arr 0 Array of numbers
 * @returns {number} Total sum
 */
function sum(arr) {
    let total = 0;
    for (let x of arr) {
        total += x;
    }
    return total;
}
console.log(sum([1,2,3,4]))
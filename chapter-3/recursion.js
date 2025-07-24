/**
 * Excercise 3.1
 * ---------------
 * Simulates the call stack behavior with two functions: greet2 and greet.
 *
 * 1. greet2(name) is called and goes onto the call stack.
 * 2. It calls greet(name), which is added to the stack.
 * 3. greet() finishes and is removed (popped).
 * 4. greet2(` resumes and is removed after finishing.
 * @param {string} name - The name to greet
 */

function greet(name) {
  console.log("Greet");
  console.log(`Name: ${name}`);
}
/**
 * Calls greet() from within and prints the name before and after.
 *
 * @param {string} name - The name to greet
 */
function greet2(name) {
  console.log("\n--- Stack Demo ---");
  console.log("Greet 2");
  greet(name);
  console.log(`Name: ${name}`);
}

greet2("Maggie");

/**
 * Calculates the factorial of a number recursively.
 * @param {number} n  - A non-negative integer
 * @returns {number} The factorial of n
 */
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log("\n--- Factorial Demo ---");
console.log(factorial(5));

/**
 * Excercise 3.2
 * JS has a recursion limit (RangeError: Maximum call stack size exceeded) if n is too large. If you're dong factorials for large numbers, use iteration instead
 * @param {number} n A non-negative integer
 * @retunrs {number} factorial of n
 */

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("\n--- Iterative Demo ---");
console.log(factorialIterative(6));
/**
 * Exercise 2.1
 * -----------------------------------
 * Suppose you're building an app to keep track of your finances.
        1. Groceries
        2. Movie
        3. SFBC Membership
* Every day, you write down everything you spent money on. At the end of the month, you review your expenses and sum up how much you spent. So, you have lots of inserts and a few reads. Should you use an array or a list?

 * Answer:You append once per day and read once per month. That's exactly what arrays/lists are optimized for in both JavaScript and Phyton.
 * In JavaScript -> Use Array and .push()
 */

// Initialize an array to store daily expenses
const expenses = [];

function addExpense(amount, category) {
  expenses.push({ amount, category, date: new Date() });
}

function getTotal() {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

function getAverage() {
  if (expenses.length === 0) return 0;
  return getTotal() / expenses.length;
}

module.exports = {
  expenses,
  addExpense,
  getTotal,
  getAverage,
};

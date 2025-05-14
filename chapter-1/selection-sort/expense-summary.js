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

addExpense(15.99, "Groceries");
addExpense(8.50, "Coffee");
addExpense(27.00, "Book");

console.log("Total spent:", `$${getTotal().toFixed(2)}`);
console.log("Average daily expense:", `$${getAverage().toFixed(2)}`);
const {
  expenses,
  addExpense,
  getAverage,
  getTotal,
} = require("../../chapter-2/expenseSummary");

describe("Expense Tracker", () => {
  beforeEach(() => {
    expenses.length = 0;
  });

  test("addExpense adds a new entry", () => {
    addExpense(10, "Groceries");
    expect(expenses.length).toBe(1);
    expect(expenses[0]).toMatchObject({ amount: 10, category: "Groceries" });
  });

  test("getTotal returns the sum of all expenses", () => {
    addExpense(10, "Groceries");
    addExpense(20, "Books");
    expect(getTotal()).toBe(30);
  });

  test("GetAverage returns 0 when no expenses", () => {
    expect(getAverage()).toBe(0);
  });

  test("getAverage returns correct average", () => {
    addExpense(10, "Groceries");
    addExpense(20, "Books");
    addExpense(30, "Movies");
    expect(getAverage()).toBeCloseTo(20);
  });
});
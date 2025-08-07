const {
  insertUserSorted,
  binarySearch,
  signUp,
  login,
} = require("../../chapter-2/userInsertSortCost");

let users;

beforeEach(() => {
  users = ["Alice", "Bob", "Charlie", "David"];
});

describe("userInsertSortCost", () => {
  test("User system (with global users array inside test)", () => {
    insertUserSorted(users, "Amelia");
    expect(users).toEqual(["Alice", "Amelia", "Bob", "Charlie", "David"]);
  });

  test("insertUserSorted adds user at thge end if needed", () => {
    insertUserSorted(users, "Zoe");
    expect(users).toEqual(["Alice", "Bob", "Charlie", "David", "Zoe"]);
  });

  test("binarySearch finds existing username", () => {
    expect(binarySearch(users, "Bob")).toBe(1);
  });

  test("binarySearch returns -1 if user not found", () => {
    expect(binarySearch(users, "Xavier")).toBe(-1);
  });

  test("signUp adds user and keeps arrat sorted", () => {
    signUp(users, "Eve");
    expect(users).toEqual(["Alice", "Bob", "Charlie", "David", "Eve"]);
  });

  test("login returns true for existing user", () => {
    expect(login(users, "Charlie")).toBe(true);
  });

  test("login returns false for missing user", () => {
    expect(login(users, "Xavier")).toBe(false);
  });
});
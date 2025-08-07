const { binarySearch, login } = require("../../chapter-2/usernameSearch");

let usernames;

beforeEach(() => {
  usernames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emily",
    "Frank",
    "George",
    "Helen",
    "Ian",
    "Jessica",
  ];
});

describe("binarySearch", () => {
  test("returns correct index when user is found", () => {
    expect(binarySearch(usernames, "Charlie")).toBe(2);
    expect(binarySearch(usernames, "Alice")).toBe(0);
    expect(binarySearch(usernames, "Jessica")).toBe(9);
  });

  test("returns -1 when user is not found", () => {
    expect(binarySearch(usernames, "Zoe")).toBe(-1);
    expect(binarySearch(usernames, "Xavier")).toBe(-1);
  });
});

describe("login", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("logs successful login message when user is found", () => {
    login(usernames, "David");
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Login successful: David")
    );
  });

  test("logs failed login message when user is not found", () => {
    login(usernames, "Maria");
    expect(consoleSpy).toHaveBeenCalledWith("Login failed: Maria not found");
  });
});

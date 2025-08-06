const { binarySearchPhoneNumber } = require("../../chapter-1/runningTime");

describe("runnningTime", () => {
  const phoneBook = [
    { name: "Alice", phone: "555-0101" },
    { name: "Bob", phone: "555-0102" },
    { name: "Charlie", phone: "555-0103" },
    { name: "Diana", phone: "555-0104" },
    { name: "Eve", phone: "555-0105" },
  ];
  test("returns correct phone number when name is found", () => {
    expect(binarySearchPhoneNumber(phoneBook, "Charlie")).toBe("555-0103");
    expect(binarySearchPhoneNumber(phoneBook, "Alice")).toBe("555-0101");
    expect(binarySearchPhoneNumber(phoneBook, "Eve")).toBe("555-0105");
  });
  test("returns null when the name is not found", () => {
    expect(binarySearchPhoneNumber(phoneBook, "Frank")).toBeNull();
    expect(binarySearchPhoneNumber(phoneBook, "")).toBeNull();
  });
  test("works with a single-entry phone book", () => {
    const singleEntry = [{ name: "Zoe", phone: "555-0111" }];
    expect(binarySearchPhoneNumber(singleEntry, "Zoe")).toBe("555-0111");
    expect(binarySearchPhoneNumber(singleEntry, "NotZoe")).toBeNull();
  });
  test("returns null with an empty phone book", () => {
    expect(binarySearchPhoneNumber([], "Charlie")).toBeNull();
  });
});
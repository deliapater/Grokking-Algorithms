const { findEntriesByFirstLetter } = require("../../chapter-1/sortedList");

describe("findEntriesByFirstLetter", () => {
  const phoneBook = [
    { name: "Aaron", phone: "555-0100" },
    { name: "Alice", phone: "555-0101" },
    { name: "Bob", phone: "555-0102" },
    { name: "Charlie", phone: "555-0103" },
    { name: "Diana", phone: "555-0104" },
    { name: "Eve", phone: "555-0105" },
  ];
  test("returns entries starting with A", () => {
    results = findEntriesByFirstLetter(phoneBook, "A");
    expect(results).toEqual([
      { name: "Aaron", phone: "555-0100" },
      { name: "Alice", phone: "555-0101" },
    ]);
  });
  test("returns letters starting with B", () => {
    const results = findEntriesByFirstLetter(phoneBook, "B");
    expect(results).toEqual([{ name: "Bob", phone: "555-0102" }]);
  });
  test("returns an empty array if no names match", () => {
    const results = findEntriesByFirstLetter(phoneBook, "Z");
    expect(results).toEqual([]);
  });
  test("returns entries starting with D", () => {
    const results = findEntriesByFirstLetter(phoneBook, "D");
    expect(results).toEqual([{ name: "Diana", phone: "555-0104" }]);
  });
});
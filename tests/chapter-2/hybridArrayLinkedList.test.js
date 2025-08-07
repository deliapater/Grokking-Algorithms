const { expenses } = require("../../chapter-2/expenseSummary");
const {
  LinkedList,
  getSlotIndex,
  addUser,
  searchUser,
  userDirectory,
} = require("../../chapter-2/hybridArrayLinkedList");

describe("Hybrid User Directory", () => {
  beforeEach(() => {
    // Clear all linked lists before each test
    for (let i = 0; i < 26; i++) {
      userDirectory[i] = new LinkedList();
    }
  });

  test("getSlotIndex returns correct index for lowercase and uppercase letters", () => {
    expect(getSlotIndex("Alice")).toBe(0);
    expect(getSlotIndex("Bob")).toBe(1);
    expect(getSlotIndex("Zane")).toBe(25);
  });

  test("insert and search in LinkedList", () => {
    const list = new LinkedList();
    list.insert("Alice");
    list.insert("Bob");

    expect(list.search("Alice")).toBe(true);
    expect(list.search("Bob")).toBe(true);
    expect(list.search("Charlie")).toBe(false);
  });

  test("printList returns user in insertion order", () => {
    const list = new LinkedList();
    list.insert("Alice");
    list.insert("Bob");
    expect(list.printList()).toEqual(["Alice", "Bob"]);
  });

  test("addUser add user to correct slot", () => {
    addUser("Charlie");
    const index = getSlotIndex("Charlie");
    expect(userDirectory[index].search("Charlie")).toBe(true);
  });

  test("searchUser cprrectly finds or misses users", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    addUser("Zahkir H");
    searchUser("Zahkir H");
    expect(consoleSpy).toHaveBeenCalledWith("Found Zahkir H");

    searchUser("Zed");
    expect(consoleSpy).toHaveBeenCalledWith("Zed not found");

    consoleSpy.mockRestore();
  });
});

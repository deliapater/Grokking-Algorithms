/**
 * Excercise 2.5
 * -----------------------------------
 * Hybrid structure: Array of 26 linked lists (A-Z)
 */

class Node {
  constructor(username) {
    this.username = username;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Append user to the end
  insert(username) {
    const newNode = new Node(username);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Search for a username
  search(username) {
    let current = this.head;
    while (current) {
      if (current.username === username) return true;
      current = current.next;
    }
    return false;
  }

  // Print all users in list
  printList() {
    let current = this.head;
    const users = [];
    while (current) {
      users.push(current.username);
      current = current.next;
    }
    return users;
  }
}

// Create 26 slots (for A-Z)
const userDirectory = new Array(26).fill(null).map(() => new LinkedList());

// Helper to get index (0-25) based on first letter
function getSlotIndex(username) {
  const firstChar = username.trim()[0].toLowerCase();
  const index = firstChar.charCodeAt(0) - "a".charCodeAt(0);
  return Math.max(0, Math.min(index, 25));
}

function addUser(username) {
  const index = getSlotIndex(username);
  userDirectory[index].insert(username);
  console.log(`Added ${username} to slot ${index}`);
}

function searchUser(username) {
  const index = getSlotIndex(username);
  const found = userDirectory[index].search(username);
  console.log(found ? `Found ${username}` : `${username} not found`);
}

// Example
addUser("Adit B");
addUser("Alice");
addUser("Zahkir H");

searchUser("Zakhir H");
searchUser("Zane");
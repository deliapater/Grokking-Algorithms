/**
 * Exercise 1.3
 * ---------------
 * Sorted List (alphabetical) using binary Search
   Time Complexity: 0log(n) 
 * Performs binary search on a sorted array of people to find a phone number.
 * @param {Array} phoneBook - Sorted array of objects with 'name' and 'phone'
 * @param {string} targetName - The name to search for
 * @returns {string|null} - Phone number if found, or null
 */

function binarySearchPhoneNumber(phoneBook, targetName) {
  let low = 0;
  let high = phoneBook.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = phoneBook[mid].name;

    if (guess === targetName) {
      return phoneBook[mid].phone;
    }
    if (guess < targetName) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
}

const phoneBook = [
  { name: "Alice", phone: "555-0101" },
  { name: "Bob", phone: "555-0102" },
  { name: "Charlie", phone: "555-0103" },
  { name: "Diana", phone: "555-0104" },
  { name: "Eve", phone: "555-0105" },
];

const target = "Charlie";
const result = binarySearchPhoneNumber(phoneBook, target);

if (result) {
  console.log(`Found ${target}'s phone number: ${result}`);
} else {
  console.log(`${target} was not found in the phone book.`);
}
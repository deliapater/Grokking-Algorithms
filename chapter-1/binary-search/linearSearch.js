/**
 * Excercise 1.4
 * ---------------
 * This requires linear search because phone numbers are not typically used as lookup keys unless
 * explicitly designed that way. Every entry needs to be search to find a match
 * Time complexity: 0(n) 
 * @param {Array} phoneBook - Array of objects with 'name' and 'phone'
 * @param {string} targetPhone - The phone number to search for
 * @returns {string|null} -  Name if found, or null
 */

function findNameByPhoneNumber(phoneBook, targetPhone) {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].phone === targetPhone) {
      return phoneBook[i].name;
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

const targetPhone = "555-0104";
const result = findNameByPhoneNumber(phoneBook, targetPhone);

if (result) {
  console.log(`The phone number ${targetPhone} belongs to ${result}.`);
} else {
  console.log(`No entry found for phone number ${targetPhone}.`);
}

/**
 * Excercise 1.5
 * ---------------
 * You're performing an operation on each item in the list.
   This is a classic example of linear time.
   Time complexity: 0(n) 
 */

function readAllPhoneNumbers(phoneBook) {
  phoneBook.forEach((entry) => {
    console.log(`${entry.name}: ${entry.phone}`);
  });
}

readAllPhoneNumbers(phoneBook);
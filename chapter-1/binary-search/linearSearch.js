/**
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

function readAllPhoneNumbers(phoneBook) {
  phoneBook.forEach((entry) => {
    console.log(`${entry.name}: ${entry.phone}`);
  });
}

readAllPhoneNumbers(phoneBook);
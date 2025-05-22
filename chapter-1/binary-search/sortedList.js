/**
 * Excercise 1.6
 * ---------------
 * Finds the range of entries whose names start with a given letter.
 * Assumes the phone book is sorted by name.
 * @param {Array} phoneBook
 * @param {string} startLetter
 * @returns {Array} Matching entries
 */

function findEntriesByFirstLetter(phoneBook, startLetter) {
  const results = [];
  let low = 0;
  let high = phoneBook.length - 1;

  // Find startying index using binary search
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const firstChar = phoneBook[mid].name[0];

    if (firstChar < startLetter) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // Scan forward from 'low' to collect names starting with the letter
  while (
    low < phoneBook.length &&
    phoneBook[low].name.startsWith(startLetter)
  ) {
    results.push(phoneBook[low]);
    low++;
  }
  return results;
}

const phoneBook = [
  { name: "Aaron", phone: "555-0100" },
  { name: "Alice", phone: "555-0101" },
  { name: "Bob", phone: "555-0102" },
  { name: "Charlie", phone: "555-0103" },
  { name: "Diana", phone: "555-0104" },
  { name: "Eve", phone: "555-0105" },
];

const aEntries = findEntriesByFirstLetter(phoneBook, "A");
aEntries.forEach((entry) => console.log(`${entry.name}: ${entry.phone}`));
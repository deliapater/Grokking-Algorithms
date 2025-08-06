/**
 * Exercise 1.6
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

module.exports = {
  findEntriesByFirstLetter
}
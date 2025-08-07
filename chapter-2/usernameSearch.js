/**
 * Excercise 2.3
 * -----------------------------------
 * Facebook stores a list of usernames and uses binary search to check login attempts.
 * Binary search requires random access, which arrays support (0(1) index access).
 * Linked lists are not suitable because they don't allow fast random access.
 *
 * We use an array for efficiency with bianry search.
 */

/**
 * @param {Array<string>} arr - Storted array of usernames
 * @param {string} target - Username to seach for
 * @return {number} - Index of the username if found, otherwise -1
 */
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === target) {
      return mid;
    }

    if (guess < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

/**
 * Simulates login attempt
 * @param {Array<string} usernames - Sorted list of usernames
 * @param {string} username - Username to search
 *
 */
function login(usernames, username) {
  const index = binarySearch(usernames, username);
  if (index !== -1) {
    console.log(`Login successful: ${username} (found at index ${index})`);
  } else {
    console.log(`Login failed: ${username} not found`);
  }
}

module.exports = {
  binarySearch,
  login,
};
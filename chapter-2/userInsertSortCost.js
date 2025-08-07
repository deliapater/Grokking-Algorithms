/**
 * Excercise 2.4
 * -----------------------------------
 * Binary search requires the array to be sorted.
 * When a new user signs up, they must be inserted into the correct position.
 *
 * Login (binary search) is fast: 0(log n)
 * Sign-up (insertion into sorted array) is slow: 0(n) for find + 0(n) for shift or 0(n log n) if you re-sort the array after push.
 */

// function insertUserSorted(arr, newUser) {
//   arr.push(newUser);
//   arr.sort();
// }

/**
 * @param {Array<string} arr - Sorted array of usernames
 * @param {string} target - Username to find
 * @returns {number} - Index if found, else -1
 */
function insertUserSorted(arr, newUser) {
  const index = arr.findIndex((name) => name > newUser);
  if (index === -1) {
    arr.push(newUser);
  } else {
    arr.splice(index, 0, newUser);
  }
}

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

/**
 * Simulate user signup
 * @param {Array<string>} usernames - The sorted user array
 * @param {string} newUser - New username
 */
function signUp(usernames, newUser) {
  console.log(`Signing up user: ${newUser}`);
  insertUserSorted(usernames, newUser);
}

/**
 * Simulate login
 * @param {Array<string>} usernames - The sorted user array
 * @param {string} username - Username to log in
 */
function login(usernames, username) {
  const index = binarySearch(usernames, username);
  return index !== -1;
}

module.exports = {
  insertUserSorted,
  binarySearch,
  signUp,
  login
}
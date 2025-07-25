/**
 * Exercise 5.5 - 5.7
 * ---------------
 * @param {string} key - Name or title
 * @param {number} hashSize - Table size
 * @returns {number} - The computed hash index
 */

function hashA(key, hashSize) {
  return 1 % hashSize;
}

function hashB(key, hashSize) {
  return key.length % hashSize;
}

function hashC(key, hashSize) {
  const firstChar = key[0].toLowerCase();
  return firstChar.charCodeAt(0) % hashSize;
}

console.log("\n-- Hashes Demo ---");
const keys = ["Esther", "Ben", "Dan"];
const hashSize = 10;

for (const key of keys) {
  console.log(`Key: ${key}`);
  console.log(`  A: ${hashA(key, hashSize)}`);
  console.log(`  B: ${hashB(key, hashSize)}`);
  console.log(`  C: ${hashC(key, hashSize)}`);
  console.log(`  D: ${hashD(key, hashSize)}`);
}

function hashD(str, hashSize) {
  const primeMap = {
    a: 2,
    b: 3,
    c: 5,
    d: 7,
    e: 11,
    f: 13,
    g: 17,
    h: 19,
    i: 23,
    j: 29,
    k: 31,
    l: 37,
    m: 41,
    n: 43,
    o: 47,
    p: 53,
    q: 59,
    r: 61,
    s: 67,
    t: 71,
    u: 73,
    v: 79,
    w: 83,
    x: 89,
    y: 97,
    z: 101,
  };

  let sum = 0;
  for (let char of str.toLowerCase()) {
    if (primeMap[char]) {
      sum += primeMap[char];
    }
  }
  return sum % hashSize;
}
# Problem Statement

## Which of these hash functions ares consistents?

### 5.1

`f(x) = 1 - consistent`

### 5.2

` f(x) = rand() - inconsistent`

### 5.3

` f(x) = next_empty_slot - inconsistent`

### 5.4

`f(x) = length(x) - consistent`

## Suposse you have these hash functions that work with strings"

`A. Return 1 for all input.`
`B. Use the length of the string as the index.`
`C. Use the first character of the string as a index.`
`D. Map every letter to a prime number: a = 2, b = 3, c = 5, d = 7, e = 11, and so on. For a string, the hash function is the sum of all the characters modulo the size of the hash. For example, if your hash size is 10, and the string is "bag", the index is 3 + 2 + 17 % 10 = 22 % 10 = 2.`

## For each of these examples, which hash function would provide a good distribution? Assume a hash table size of 10 slots.

### 5.5 A phonebook where the keys are names and values are phone numners. The names are as follows: Esther, Ben, and Dan.

A: ❌ All map to index 1

B: "Esther"(6), "Ben"(3), "Dan"(3) → Indexes: 6, 3, 3 → Some collisions

C: "E", "B", "D" → Indexes based on chars: 69, 66, 68 → 69 % 10 = 9, etc. ✅

D: Uses full string content → more spread ✅

### 5.6. A mapping from battery size to power. The size are A, AA, AAA, and AAAA.

Sizes: "A", "AA", "AAA", "AAAA"

A: ❌ All → 1

B: Lengths: 1, 2, 3, 4 → Indexes: 1, 2, 3, 4 ✅

C: All start with "A" → all map to same index ❌

D: Uses all chars ("A" = 2), so:

"A": 2 % 10 = 2

"AA": 2 + 2 = 4 % 10 = 4

"AAA": 6 % 10 = 6

"AAAA": 8 % 10 = 8 ✅

### 5.7 A mapping from book titles to authors, The titles are Maus, Fun Home, and Watchment

Titles: "Maus", "Fun Home", "Watchmen"

A: ❌ Everything → 1

B: Lengths: 4, 8, 8 → Indexes: 4, 8, 8 → One collision

C: First letters: "M", "F", "W" → likely different indexes ✅

D: Whole string primes → decent spread ✅

✅ Answer: C and D mostly.
✅ B gives some distribution, but not perfect. Including it is okay, though not ideal.

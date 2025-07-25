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
`` C and D will give a good distribution``

### 5.6. A mapping from battery size to power. The size are A, AA, AAA, and AAAA.
`` B and D will give a good distribution``

### 5.7 A mapping from book titles to authors, The titles are Maus, Fun Home, and Watchment
`` B, C and D will give a good distribution``

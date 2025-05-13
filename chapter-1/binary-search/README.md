# Problem Statement

## Binary Search

### 1.1 Suppose you have a sorted list of 128 names, and you are searching through it using binary search. What's the maximum number you would search?

`` Maximum number of steps = Log2(n)``
`` Log2(128) = 7 ``

### 1.2 Suppose you double the size of the list. What's the maximum number of steps now?

`` Maximum number of steps = Log2(n) ``
`` Log2(256) = 8 ``

## Running Time
### Given the run time for each of this scenarios in terms of Big O.
### 1.3 You have a name, and you want to find the person's phone number in the phone book.

`` Sorted List (alphabetical) using binary Search ``
`` Time Complexity: 0log(n) ``

### 1.4 You have a phone number, and you want to find the person's name in the phone book. (Hint: You'll have to search through the whole book!)

`` This requires linear search because phone numbers are not typically used as lookup keys unless explicitly designed that way. Every entry needs to be search to find a match. ``
`` Time complexity: 0(n) ``

### 1.5 You want to read the numbers of every person in the phone book.

`` You're performing an operation on each item in the list. ``
`` This is a classic example of linear time. ``
`` Time complexity: 0(n) ``
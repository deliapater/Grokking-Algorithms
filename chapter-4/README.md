# Problem Statement

### 4.1 Write out the code for the earlier `sum` function.

### 4.2 Write a recursive function to count the number of items in a list.

### 4.3 Find the maximum number in a list.

### 4.4 Remember binary search from chapter 1? It's a divide-and-conquer algorithm, too. Can you come up with the base case and recursive case for binary search?

`The base case for binary search is an array with one item. If the item you're looking for matches the item in the array, you found it! Otherwise, it isn't in the array`

## How long would each of these operations take in Big O notation?

### 4.5 Printing the value of each element in an array.
`` O(n) - Linear Time ``

### 4.6 Doubling the value of each element in an array.
`` O(n) — You touch every element once, doing one multiplication per element. ``

### 4.7 Doubling the value of just the first element in an array.
`` O(1) - Constant Time; you are accesing and modifying only the first element, no matter how large the array is ``

### 4.8 Creating a multiplication table with all elements in the array. So if your array is [2, 3, 7, 8, 10], you first multiply every element by 2, then multiply every element by 3, then by 7, and so on.
`` O(n²) - Quadric Time; you do a .map() for every element. ``
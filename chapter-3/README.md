# Problem Statement

### 3.1 Supose you have a call stack like this: 
`` Greet 2 ``
`` Name: Maggie ``
`` Greet ``
`` Name: Maggie ``
`` What information can you give me, just based on this stack call? ``

### 3.2 Suppose you accidentally write a recursion function  that runs forever. As you saw, your computer allocates memory on the stack for each function call. What happens to the stack when your recursive function runs forever?
`` JS has a recursion limit (`RangeError: Maximum call stack size exceeded`) if `n` is too large. If you're dong factorials for large numbers, use iteration instead ``
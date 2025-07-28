# Problem Statement

## Run the breadth-first search alogirthm on each of these graphs to find the solution.

### 6.1 Find the length to the shortest path from start to finish.

![6.1 Graph](../assets/6.1_graph.png)
Answer:
The shortest path length is `2`.

### 6.2 Find the lenght of the shortest path from "cab" to "bat"

![6.2 Graph](../assets/6.2_graph.png)
Answer:
The shortest path length is `2`.

## Here is a small graph of my morning rutine

![6.3 Graph](../assets/6.3_graph.png)

It tells you that I cannot eat breakfast unitl I have brushed my teeth. So "eat breakfast" depends of "brush teeth".

On the other hand showering doesn't depent on brushing my teeth, because I can shower before I brush my teeth. From this graph, you can make a list of the order in which I need to do my morning routine:

1. Wake up.
2. Shower.
3. Brush teeth.
4. Eat breakfast.

Note that "shower" can be moved around, so this list is also valid:

1. Wake up.
2. Brush teeth.
3. Shower.
4. Eat breakfast.

### 6.3 For these three lists, mark wether one is valid or invalid

A)

1. Wake up.
2. Shower.
3. Eat breakfast.
4. Brush teeth.

B)

1. Wake up.
2. Brush teeth.
3. Eat breakfast.
4. Shower.

C) 4. Shower. 2. Wake up. 3. Brush teeth. 4. Eat breakfast.

`A an C are invalid, B is valid`

### 6.4 Here's a larger graph. Make a valid list for this graph.

![6.4 Graph](../assets/6.4_graph.png)

You could say that this is sorted, in a way. If task A depends on task B, task A shows later in the list. This is called a topological sort, and it's a way to make an ordered list out of a graph. Suppose you're planning a wedding and have a large graph full of tasks to do - and you're not sure where to start. You could topologically sort the graph and get a list of tasks to do, in order.

1. Wake up.
2. Exercise.
3. Shower.
4. Brush teeth.
5. Get dressed.
6. Pack lunch.
7. Eat breakfast.

### Suppose you have a family tree.

![6.5 Graph](../assets/6.5_graph.png)

This is a graph, because you have nodes (the people) and edges. The edges point to the nodes' parents. But all the edges go down - it wouldn't make sense for a family tree to have and edge pointing back up! That would be meaningless - your dad can't be your gradfather's dad!

This is called a tree. A tree is a special type of graph, where no edges ever point back.

### 6.5 Which of the following graph are also trees?

![A](../assets/6.5.a_graph.png)

![B](../assets/6.5.b_graph.png)

![C](../assets/6.5.c_graph.png)

Answer:
`A` and `C` are also trees.
/**
 * Excercise 2.2
 * -----------------------------------
 * Suppose you're building an app for restaurants to take customer orders. Your app needs to store a list of orders. Servers keep adding orders to this list, and chefs take orders off the list and make them. It's an order queue: servers add orders to the back of the queue, and the chef takes the first order off the queue and cooks it.
 * Would you use an array or a linked list to implement this queue? (Hint: Linked lists are good for inserts/deletes, and arrays are good for random access. Which one are you going to be doing here?)
 *
 * Answer: Even though Linked list are good for inserts and deletes; JavaScript doesn't have a built-in linked list, However you can implement one yourself to get constant-time operations for a queue.
 */

// Node structure for the linked list
class Node {
  constructor(order) {
    this.order = order;
    this.next = null;
  }
}

// Linked list-based queue
class OrderQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add order to the end
  enqueue(order) {
    const newNode = new Node(order);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Remove order from the front
  dequeue() {
    if (!this.head) return null;
    const removedOrder = this.head.order;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return removedOrder;
  }

  // View current queue
  printQueue() {
    let current = this.head;
    const orders = [];
    while (current) {
      orders.push(current.order);
      current = current.next;
    }
    console.log("Current Queue:", orders);
  }
}

const kitchenQueue = new OrderQueue();

kitchenQueue.enqueue("Burger");
kitchenQueue.enqueue("Pasta");
kitchenQueue.enqueue("Salad");

kitchenQueue.printQueue();

console.log("Chef is making:", kitchenQueue.dequeue());
kitchenQueue.printQueue();

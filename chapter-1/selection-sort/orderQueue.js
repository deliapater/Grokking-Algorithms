/**
 * Excercise 2.2
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

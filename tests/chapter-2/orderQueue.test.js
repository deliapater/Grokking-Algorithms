const { OrderQueue } = require("../../chapter-2/orderQueue");

describe("OrderQueue", () => {
  let queue;

  beforeEach(() => {
    queue = new OrderQueue();
  });

  test("enqueue adds orders to the end", () => {
    queue.enqueue("Burger");
    queue.enqueue("Pasta");
    queue.enqueue("Salad");

    expect(queue.head.order).toBe("Burger");
    expect(queue.head.next.order).toBe("Pasta");
    expect(queue.tail.order).toBe("Salad");
  });

  test("dequeue removes and returns the first order", () => {
    queue.enqueue("Burger");
    queue.enqueue("Pasta");
    expect(queue.dequeue()).toBe("Burger");
    expect(queue.dequeue()).toBe("Pasta");
    expect(queue.dequeue()).toBeNull();
  });

  test("printQueue logs all orders in FIFO order", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    queue.enqueue("Burger");
    queue.enqueue("Pasta");
    queue.enqueue("Salad");
    queue.printQueue();
    expect(spy).toHaveBeenCalledWith("Current Queue:", [
      "Burger",
      "Pasta",
      "Salad",
    ]);
    spy.mockRestore();
  });

  test("dequeue resets tail to null when last item is removed", () => {
    queue.enqueue("OnlyOne");
    expect(queue.dequeue()).toBe("OnlyOne");
    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
  });
});
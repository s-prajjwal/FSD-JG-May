// Method 1

let queue = [1, 2, 3, 4, 5];

// enqueue/ push new element 7
function enqueue(ele) {
  this.push(ele);
}
Array.prototype.enqueue = enqueue;

queue.enqueue(7);

// dequeue
let firstEle = queue.shift();
console.log(firstEle);

// isEmpty
let isEmpty = queue.length === 0 ? true : false;
console.log(isEmpty);

if (queue.length === 0) {
  // true -> if queue is empty
}

// peek
console.log(queue[0]);

// Method 2

class Queue {
  constructor(...items) {
    // initialize properties of the class
    // properties -> variable
    // mehods -> functions
    this.queue = [...items];
  }

  dequeue() {
    // first check if the queue is not empty
    if (this.isEmpty()) {
      return NaN;
    }
    // pops the first element in the list/queue
    const firstEle = this.queue.shift();
    return firstEle;
  }

  isEmpty() {
    return this.queue.length === 0 ? true : false;
  }

  enqueue(...eles) {
    // ele will be added at the last of the queue
    this.queue.push(...eles);
  }

  peek() {
    // return the first element in the queue
    return this.queue[0]; // []
  }
}

const queue1 = new Queue(1, 2, 3);
const queue2 = new Queue();

console.log(queue1); // [1, 2, 3, 5]
console.log(queue2); // [4]

queue2.enqueue(4, 10, 20);
console.log(queue2);

queue1.enqueue(5);
console.log("Queue1 after insertin 5", queue1);

console.log(
  "First element in queue1",
  queue1.dequeue(),
  queue1.isEmpty(),
  queue1.peek()
); // 1, false, 2
console.log(
  "First element in queue1",
  queue1.dequeue(),
  queue1.isEmpty(),
  queue1.peek()
); // 2, false, 3

console.log(
  "First element in queue1",
  queue1.dequeue(),
  queue1.isEmpty(),
  queue1.peek()
); // 3, false, 5

console.log(
  "First element in queue1",
  queue1.dequeue(),
  queue1.isEmpty(),
  queue1.peek()
); // 5, true, udnefined

console.log(
  "First element in queue1",
  queue1.dequeue(),
  queue1.isEmpty(),
  queue1.peek()
); // NaN, true, undefined

console.log(Queue.prototype);

function myTrim(s) {
  // s = "  aa  "
  // take a loop and try to get the index where first character appaears
}

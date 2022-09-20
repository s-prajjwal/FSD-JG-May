let stack = [];

stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]

stack.pop(); // 3
// [1, 2]

peek(stack); // 2
// [1, 2]
isEmpty(stack); // false

function peek(stack) {
  return stack[stack.length - 1];
}

function isEmpty(stack) {
  return stack.length === 0 ? true : false;
}

let queue = [];

// enqueue
queue.push(1); // [1]
queue.push(2); // [1, 2]
queue.push(3); // [1, 2, 3]

// dequeue
queue.shift(); // 1
// [2, 3]

queue.shift(); // 2
// [3]

// peek
function peek(queue) {
  return queue[0];
}

peek(queue); // 3

// isEmpty
function isEmpty(queue) {
  return queue.length === 0 ? true : false;
}

isEmpty(queue); // false

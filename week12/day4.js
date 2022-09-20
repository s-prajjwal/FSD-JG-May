let stack = [1, 2, 3, 4, 5];

stack.push(6);
console.log(stack);
console.log(stack.pop());

Array.prototype.top = function () {
  return this[this.length - 1];
};

console.log(stack.top());

let stack1 = [2, 4, 6];

console.log(stack1.top());

Object.prototype.myMethod = function () {
  return this;
};

let obj = {
  a: 1,
  b: 2,
};

console.log(obj.myMethod());

function top(stack) {
  return stack[stack.length - 1];
}

top(stack);
function isEmpty() {
  return this.length > 0 ? false : true;
}

Array.prototype.isEmpty = isEmpty;

console.log(isEmpty([]));

let arr = new Array();

class Car {
  constructor(model) {
    this.model = model;
  }
}

let carObj = new Car("i20");

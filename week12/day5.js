let stack = [1, 2, 3, 4, 5];

console.log(stack.pop());
console.log(stack);

stack.push(7);
console.log(stack);

Array.prototype.peek = function () {
  // this -> stack
  return this[this.length - 1]; //last element of the array which has called peek method
}; // Function expression

// this -> window
console.log(stack.peek()); //7

stack.push(8);
console.log(stack.peek());

// How to attach new methods to in built classes in Javascript
// Array -> class in JS
// pop, push, shift, unshift
// peek -> returns the last/top element

// Hoisting -> Function statements

function isEmpty(stack) {
  return stack.length > 0 ? false : true;
}

console.log(isEmpty(stack));

// console.log(stack.isEmpty()); // false
// console.log([].isEmpty()); // true

Array.prototype.isFull = function () {
  return this.length === limit ? true : false;
};
let limit = 10;
console.log(stack.isFull()); // false



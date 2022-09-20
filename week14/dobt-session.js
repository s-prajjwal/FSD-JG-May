let stack = [];

function MyQueue() {
  this.stack1 = [];
  this.stack2 = [];
}

// let arr = new Array();

MyQueue.prototype.push = function () {
  console.log(this);
};

var obj = new MyQueue();
obj.push();




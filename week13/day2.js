class LinkedListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function meethod1() {
  // globally acessible
}

const head2 = new LinkedListNode(11, null);

console.log(head2);

// Constructor function
function LLNode(data, next) {
  this.data = data;
  this.next = next;
}

const head1 = new LLNode(10, null);
const head3 = new LLNode(12, null);
console.log(head1);

// Controlling the structure of Linked List
function addNodeAtTheEnd(head, data) {
  // Step: 1 - create the new node
  const newNode = new LinkedListNode(data, null);

  // next = null
  let curr = head; // let i=0

  // 1 -> 2 -> 3 -> 4 -> 5
  // Objective: To reach the last node in LL
  while (curr.next !== null) {
    curr = curr.next; // shift the curr to next node
  }

  // now curr is pointing to the last node in the linked list

  curr.next = newNode;
}

function printLinkedList(head) {
  // we have to traverse and print the data part till the last element in the linked list
  // 1 -> 2 -> 3 -> 4 -> null

  // 1 2 3 4
  for (let curr = head; curr !== null; curr = curr.next) {
    console.log(curr.data);
  }

  //   let curr = head;
  //   while(curr!==null) {
  //     console.log(curr.data);
  //     curr = curr.next
  //   }
}

// pass by value
// pass by reference

function addNodeAtBeginning(head, data) {
  // Step 1 - Creating a new node
  let newNode = new LinkedListNode(data, head);
  return newNode;
}

function addNodeInMiddle(head, target, data) {
  const newNode = new LinkedListNode(data, null);

  let curr = head;

  // 5 -> 1 -> 2 -> 3 -> 4 -> null
  while (curr.data !== target) {
    // come here
    curr = curr.next;
  }

  // curr = target node
  newNode.next = curr.next;

  curr.next = newNode;
}

function modifyData(head, target, newData) {
  let curr = head;
  while (curr.data !== target) {
    curr = curr.next;
  }

  // curr = target Node
  curr.data = newData;
}

function deleteTargetNode(head, target) {
  let curr = head;

  // target = 6
  // 5 -> 1 -> 2 -> 6-> 3 -> 4 -> null
  while (curr.next.data !== target) {
    curr = curr.next;
  }

  // curr = previous element to the target
  curr.next = curr.next.next;
  // The target node is not reachable anymore, so JS will delete it automatically
}

function deleteHeadNode(head) {
  return head.next;
}

// function delNode(head, target) {
//   let cur = head;
//   let prev = head;
//   while (cur.data !== target) {
//     prev = cur;
//     cur = prev.next;
//   }

//   // prev -> previous node to the target node
//   // cur -> target node
//   prev.next = cur.next;
//   cur.next = null;
// }

var head = new LinkedListNode(1, null); // object
/**
 * head = {
 *  data: 1,
 *  next: null
 * }
 */

// 1->2->3->4->null

// 2
addNodeAtTheEnd(head, 2);
// 3
addNodeAtTheEnd(head, 3);
// 4
addNodeAtTheEnd(head, 4);

// 1 -> 2 -> 3 -> 4 -> null

head = addNodeAtBeginning(head, 5); // whatever this function is returning take that in the new address

// 5 -> 1 -> 2 -> 3 -> 4 -> null

// printLinkedList(head);

addNodeInMiddle(head, 2, 6);
// 5 ->1 -> 2 -> 6 -> 3 -> 2 -> 4 -> null

// printLinkedList(head);

addNodeInMiddle(head, 3, 7);

// console.log("-----------");
// printLinkedList(head);

addNodeInMiddle(head, 4, 8);
// console.log("-----------");

// printLinkedList(head);
// console.log("-----------");

// modifyData(head, 3, 10);

deleteTargetNode(head, 6);

head = deleteHeadNode(head);

// printLinkedList(head);

// hashing, sorting, searching, matrix, linkedlist, stacks and  queues

function LinkedListNode(data, next) {
  this.data = data;
  this.next = next;
}

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
  for (let curr = head; curr !== null; curr = curr.next) {
    console.log(curr.data);
  }
}

const head = new LinkedListNode(1, null);
addNodeAtTheEnd(head, 2);
addNodeAtTheEnd(head, 3);
addNodeAtTheEnd(head, 4);
addNodeAtTheEnd(head, 5);

// printLinkedList(head);

function reverseLL(head) {
  let [prev, curr, next] = [null, head, null];
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

let newHead = reverseLL(head);
printLinkedList(newHead);

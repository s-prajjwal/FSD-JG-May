// Merge 2 sorted Linked List

class LinkedListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
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

// LL1
const head1 = new LinkedListNode(1, null);
addNodeAtTheEnd(head1, 3);
addNodeAtTheEnd(head1, 5);

// LL2
const head2 = new LinkedListNode(2, null);
addNodeAtTheEnd(head2, 4);
addNodeAtTheEnd(head2, 6);
addNodeAtTheEnd(head2, 8);

function mergeLL(head1, head2) {
  // Step 1 -
  let head3 = new LinkedListNode(null, null);
  /**
   * {data: null, next: null}
   */

  let curr = head3;

  // Step 2-
  while (head1 !== null && head2 !== null) {
    if (head1.data <= head2.data) {
      curr.next = head1;
      head1 = head1.next;
    } else {
      curr.next = head2;
      head2 = head2.next;
    }

    curr = curr.next;
  }

  // Step 3 & Step 4 -
  if (head1 === null) {
    curr.next = head2;
  } else if (head2 === null) {
    curr.next = head1;
  }

  // Step 5 -
  return head3.next;
}

function mergeLLRecursive(head1, head2, head3) {
  if (head1 === null) {
    head3.next = head2;
    return;
  } else if (head2 === null) {
    head3.next = head1;
    return;
  } else if (head1.data <= head2.data) {
    head3.next = head1;
    head1 = head1.next;
  } else if (head1.data > head2.data) {
    head3.next = head2;
    head2 = head2.next;
  }

  mergeLLRecursive(head1, head2, head3.next);
}

let head3 = new LinkedListNode(null, null);
let curr = head3;
mergeLLRecursive(head1, head2, curr);
printLinkedList(head3);
// console.log(head3);

// let mergedLLHead = mergeLL(head1, head2);
// console.log(mergedLLHead);
// printLinkedList(mergedLLHead);

// Reversing a Linked List

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

function reverseLL(head) {
  let [prev, curr, next] = [null, head, null];

  // Run a loop till the end of LL
  while (curr !== null) {
    // assign next = curr.next
    next = curr.next;

    // break the forward link and crate a backward link to the previous node
    curr.next = prev;

    // shift prev to the current node
    prev = curr;

    // shift current node to the next node
    curr = next;
  }

  // curr has reached to the end of LL

  return prev;
}

const head = new LinkedListNode(1, null);

addNodeAtTheEnd(head, 2);
addNodeAtTheEnd(head, 3);
addNodeAtTheEnd(head, 4);
addNodeAtTheEnd(head, 5);

printLinkedList(head);

function removeFirstNode(head) {
  return head.next;
}

head = removeFirstNode(head);

// console.log("After reversing ---------------------");

// // let newHead = reverseLL(head); // this will return the head of reversed Linked List
// // printLinkedList(newHead);

// // null<-1<-2<-3<-4 null

// // 4 = prev
// // null = head

// function reverseLLRec(head, prev) {
//   if (head === null) return prev;
//   let next = head.next;
//   head.next = prev;
//   return reverseLLRec(next, head); // predict time complexity of this part
// }

// let newHeadRec = reverseLLRec(head, null);
// printLinkedList(newHeadRec);

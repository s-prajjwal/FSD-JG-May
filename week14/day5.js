// Implement a tree

class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1, null, null);
const node2 = new TreeNode(2, null, null);
const node3 = new TreeNode(3, null, null);
root.left = node3;
root.right = node2;

const node4 = new TreeNode(4, null, null);
node3.left = node4;
const node5 = new TreeNode(5, null, null);
node3.right = node5;
const node6 = new TreeNode(6, null, null);
node2.right = node6;

// console.log(root);

function inorder(root) {
  // Base condition
  if (root === null) return;

  // Visit left child
  inorder(root.left);
  // Visit root
  console.log(root.data);
  // Visit right
  inorder(root.right);
}

function preorder(root) {
  // Base condition
  if (root === null) return;

  // Visit root
  console.log(root.data);

  // Visit left child
  preorder(root.left);

  // Visit right
  preorder(root.right);
}

function postorder(root) {
  // Base condition
  if (root === null) return;

  // Visit left child
  postorder(root.left);

  // Visit right
  postorder(root.right);

  // Visit root
  console.log(root.data);
}

// inorder(root);
// preorder(root);
// postorder(root);

// Q - Inorder function  to find node with data 5 and change it's data to 10..

/**
 *        1
 *      3    2
 *    4   10     6
 */

function findTargetNode(root, targetData, newData) {
  // Base condition
  if (root === null) return;
  if (root.data === targetData) {
    // change the data of target node
    root.data = newData;
    return;
  }

  // Visit left child
  findTargetNode(root.left, targetData, newData);
  // // print the data of root
  // console.log(root.data)
  // Visit right
  findTargetNode(root.right, targetData, newData);
}

// findTargetNode(root, 6, 10);

// inorder(root);

// Q - Print all the leaf nodes of the Binary Tree
function printLeafNodes(root) {
  // Base Condition
  if (root === null) return;

  if (root.left === null && root.right === null) {
    console.log(root.data);
  }

  // Visit left
  printLeafNodes(root.left);
  // Visit right
  printLeafNodes(root.right);
}

printLeafNodes(root);

function countNodes(root) {
  // Base condition
  if (root === null) return;
  if (root.left === null && root.right === null) return 1;
  // count++;
  leftCount = countNodes(root.left);
  rightCount = countNodes(root.right);
  return leftCount + rightCount + 1;
}

function countNodeswithCount(root, count) {
  if (root === null) return count;
  count++;
  count = countNodeswithCount(root.left, count);
  count = countNodeswithCount(root.right, count);
  return count;
}

console.log("No of nodes in BT", countNodeswithCount(root, 0));

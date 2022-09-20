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

node4.left = new TreeNode(9, null, null);
node5.left = new TreeNode(7, null, null);
node5.right = new TreeNode(8, null, null);

function noOfNodes(root) {
  // base conditions
  if (root === null) return 0;

  if (root.left === null && root.right === null) return 1;

  // Visiting left subtree to get no of nodes there
  let lstCount = noOfNodes(root.left);
  // Visiting rigt subtree to get no of nodes there
  let rstCount = noOfNodes(root.right);

  return lstCount + rstCount + 1;
}

let count = noOfNodes(root);
console.log(count);

function height(root) {
  if (root === null) return 0;

  if (root.left === null && root.right === null) return 1;

  // Visiting left subtree to get no of nodes there
  let lstCount = height(root.left); //0
  // Visiting rigt subtree to get no of nodes there
  let rstCount = height(root.right); //0

  return Math.max(lstCount, rstCount) + 1;
}

let heightOfBT = height(root);
console.log(heightOfBT);

// Create BST

const rootBST = new TreeNode(23, null, null);
rootBST.left = new TreeNode(15, null, null);
rootBST.right = new TreeNode(25, null, null);
rootBST.left.left = new TreeNode(13, null, null);
rootBST.left.right = new TreeNode(18, null, null);
rootBST.left.left.left = new TreeNode(12, null, null);
rootBST.left.right.left = new TreeNode(17, null, null);
rootBST.left.right.right = new TreeNode(21, null, null);

rootBST.right.left = new TreeNode(24, null, null);
rootBST.right.right = new TreeNode(25, null, null);

function search(root, targetData) {
  if (root === null || targetData === null) return -1;
  if (root.data === targetData) return root;

  // if target Data is less than the root node -> move your search space to the LST
  if (root.data > targetData) return search(root.left, targetData);

  // if target Data is greater than the root node -> move your search space to the RST
  if (root.data < targetData) return search(root.right, targetData);
}

let targetData = 19;
let targetNode = search(rootBST, targetData);
console.log(targetNode);

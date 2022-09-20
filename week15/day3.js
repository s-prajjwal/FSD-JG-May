class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Create BST

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

function insertNode(root, newData) {
  // Base condition
  if (root === null) return;

  if (newData >= root.data) {
    if (root.right === null) {
      // Insert the node in place of null
      root.right = new TreeNode(newData, null, null);
      return;
    }
    return insertNode(root.right, newData);
  } else if (newData < root.data) {
    if (root.left === null) {
      root.left = new TreeNode(newData, null, null);
      return;
    }
    // Move to left subtree
    return insertNode(root.left, newData);
  }
}

// insertNode(null, 25)

const root = new TreeNode(40, null, null);

insertNode(root, 10);
insertNode(root, 60);
insertNode(root, 20);
insertNode(root, 25);
insertNode(root, 50);
insertNode(root, 70);
insertNode(root, 55);

inorder(root);

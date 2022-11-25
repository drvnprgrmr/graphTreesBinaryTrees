class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertChild(value) {
    console.log(this.left, this.right);
    if (!this.left) {
      this.left = new BinaryTree(value);
      return this.left;
    } else if (!this.right) {
      this.right = new BinaryTree(value);
      return this.right;
    } else {
      // throw new Error("Maximum children reached!");
    }
  }

  // left, root, right
  inOrderTraversal(func = console.log) {}

  // root, left, right
  preOrderTraversal(func = console.log) {}

  // left, right, root
  postOrderTraversal(func = console.log) {}
}

const root = new BinaryTree(1);

let lr = root.insertChild(2);
let lr2 = root.insertChild(3);

console.log(root);
console.log(!null);
export default BinaryTree;

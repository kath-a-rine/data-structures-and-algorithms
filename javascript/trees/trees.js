'use strict';

const Queue = require('../stacks-and-queues/stack-and-queue');

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(){
    this.root = null;
  }

  preOrder(){
    let results = [];

    const traverse = node => {
      results.push(node.value);

      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder(){
    let results = [];

    const traverse = node => {
      if(node.left) traverse(node.left);
      results.push(node.value);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder(){
    let results = [];

    const traverse = node => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  maxValue(){
    // let currentNode = this.node.data;
    // let leftNode = this.maxValue(this.node.left);
    // let rightNode = this.maxValue(this.node.right);

    // if (leftNode > currentNode) currentNode = leftNode;
    // if (rightNode > currentNode) currentNode = rightNode;
    // return currentNode;

    let maxValue = this.root.value;

    const traverse = node => {
      if(node.value > maxValue) maxValue = node.value;
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return maxValue;
  }

  breadthFirst(tree){
    let arr = [];
    let queue = new Queue();
    let current = tree.root;
    queue.enqueue(current);

    while(!queue.isEmpty()){
      let front = queue.dequeue(current);
      arr.push(front.value);
      if(current.left) queue.enqueue(current.left);
      if(current.right) queue.enqueue(current.right);
    }
    return arr;
  }

}

class BinarySearchTree extends BinaryTree {
  constructor(root){
    super(root);
  }

  // Add
  add(value){
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
    }
    if(newNode < this.root.value){
      this.root.left = newNode;
    }
    if(newNode > this.root.value){
      this.root.right = newNode;
    }
  }

  // Contains
  contains(value){
    if(this.root === value){
      return true;
    }
    return //boolean
  }
}

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(20);

let preOrder = tree.preOrder();
let inOrder = tree.inOrder();
let postOrder = tree.postOrder();

console.log('preOrder:', preOrder);
console.log('inOrder:', inOrder);
console.log('postOrder:', postOrder);

module.exports = {
  Queue,
  BinaryTree,
  BinarySearchTree,
  Node
};

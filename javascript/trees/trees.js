'use strict';

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
    let currentNode = this.node.data;
    let leftNode = this.maxValue(this.node.left);
    let rightNode = this.maxValue(this.node.right);

    if (leftNode > currentNode) currentNode = leftNode;
    if (rightNode > currentNode) currentNode = rightNode;
    return currentNode;
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

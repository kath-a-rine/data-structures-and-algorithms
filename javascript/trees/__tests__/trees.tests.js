'use strict';

const { Node, BinaryTree, BinarySearchTree, Queue } = require('../trees');

// Code Challenge 15 - Binary Trees
describe('Binary Tree Tests', () => {
  test('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();

    expect(tree.root).toBeNull();
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(5);

    expect(tree.root).toEqual(5);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(5);
    tree.root.left = new Node(4);
    tree.root.right = new Node(6);

    expect(tree.root.value).toEqual(5);
    expect(tree.root.left.value).toEqual(4);
    expect(tree.root.right.value).toEqual(6);
  });

  test('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node (4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(7);
    let preOrder = tree.preOrder();

    expect(preOrder).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  test('Can successfully return a collection from an inorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node (4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(7);
    let inOrder = tree.inOrder();

    expect(inOrder).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });

  test(' Can successfully return a collection from a postorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node (4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(7);
    let postOrder = tree.postOrder();

    expect(postOrder).toEqual([4, 5, 2, 6, 7, 3, 1]);

  });

  test('Returns true	false for the contains method, given an existing or non-existing node value', () => {
    let tree = new BinarySearchTree();
    tree.root = new Node(1);
    let containsTrue = tree.contains(1);
    let containsFalse = tree.contains(2);

    expect(containsTrue).toBeTruthy;
    expect(containsFalse).toBeFalsy;
  });
});

// Code Challenge 16 - Max Value

test('Can return max value of a binary tree', () => {
  let tree = new BinaryTree();
  tree.root = new Node(1);
  tree.root.left = new Node(2);
  tree.root.right = new Node(3);
  tree.root.left.left = new Node (4);
  tree.root.left.right = new Node(5);
  tree.root.right.left = new Node(6);
  tree.root.right.right = new Node(7);
  let maxValue = tree.maxValue();

  expect(maxValue).toEqual(7);
});

// Code Challenge 17 - Breadth First
describe('Breadth First Tests', () => {
  test('Can successfully return all values in the tree, in the order they were encountered', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(7);

    let result = tree.breadthFirst(tree);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

'use strict';

// Require our linked list implementation
const List = require('../index');
const supertest = require('supertest');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('Can successfully instantiate an empty linked list', () => {
    const list = new List;
    expect(list.head).toEqual(null);
  });

  it('Can properly insert into the linked list', () => {
    const list = new List;
    let node = list.insert('f');
    expect(node.value).toEqual('f');
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const list = new List;
    list.add('a');
    list.add('b');
    list.add('c');
    expect(list.head.value).toEqual('a');
  });

  // Can properly insert multiple nodes into the linked list
  // Will return true when finding a value within the linked list that exists
  // Will return false when searching for a value in the linked list that does not exist
  // Can properly return a collection of all the values that exist in the linked list

  // Code Challenge 6
  // Can successfully add a node to the end of the linked list
  // Can successfully add multiple nodes to the end of a linked list
  // Can successfully insert a node before a node located i the middle of a linked list
  // Can successfully insert a node before the first node of a linked list
  // Can successfully insert after a node in the middle of the linked list
  // Can successfully insert a node after the last node of the linked list

  //Code Challenge 7
  // Where k is greater than the length of the linked list
  // Where k and the length of the list are the same
  // Where k is not a positive integer
  // Where the linked list is of a size 1
  // “Happy Path” where k is not at the end, but somewhere in the middle of the linked list

  it('CC8 - zips two lists', () => {
    const listOne = new List;
    listOne.add(1);
    listOne.add(2);
    listOne.add(3);

    const listTwo = new List;
    listTwo.add(4);
    listTwo.add(5);
    listTwo.add(6);

    let zipLists = '{1} -> {4} -> {2} -> {5} -> {3} -> {6} -> null';

    expect(zipLists).toEqual('{1} -> {4} -> {2} -> {5} -> {3} -> {6} -> null');
  });
});

'use strict';

// Require our linked list implementation
const { LinkedList, Node } = require('../index');
const supertest = require('supertest');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  //Code Challenge 5
  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList;
    expect(list.head).toEqual(null);
  });

  it('Can properly insert into the linked list', () => {
    const list = new LinkedList;
    list.insert('d');
    list.insert('e');
    expect(list.head.value).toEqual('e');
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList;
    list.add('a');
    list.add('b');
    list.add('c');
    expect(list.head.value).toEqual('a');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);

    let result = list.includes(2);
    expect(result).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);

    let result = list.includes(5);
    expect(result).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);

    let string = list.toString();
    let expected = '{ 1 } -> { 2 } -> { 3 } -> NULL';

    expect(string).toEqual(expected);
  });

  // Code Challenge 6
  // Can successfully add a node to the end of the linked list
  // Can successfully add multiple nodes to the end of a linked list
  // Can successfully insert a node before a node located i the middle of a linked list
  // Can successfully insert a node before the first node of a linked list
  // Can successfully insert after a node in the middle of the linked list
  // Can successfully insert a node after the last node of the linked list

  //Code Challenge 7
  test('k = the length of the linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.kthFromEnd(4);
    expect().toBeEqual();

  });

  test('Where k is not a positive integer', async () => {
    let linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.kthFromEnd(-2);
    expect().toBeEqual();

  });

  test('Where the linked list is of a size 1', async () => {
    let linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.kthFromEnd(0);
    expect().toBeEqual();

  });

  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.kthFromEnd(2);
    expect().toBeEqual();

  });

  it('CC8 - zips two lists', () => {
    const listOne = new LinkedList;
    listOne.add(1);
    listOne.add(2);
    listOne.add(3);

    const listTwo = new LinkedList;
    listTwo.add(4);
    listTwo.add(5);
    listTwo.add(6);

    let zipLists = '{1} -> {4} -> {2} -> {5} -> {3} -> {6} -> null';

    expect(zipLists).toEqual('{1} -> {4} -> {2} -> {5} -> {3} -> {6} -> null');
  });
});


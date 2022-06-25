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

  it('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);

    let result = list.add(4);
    expect(result).toEqual(4);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);

    list.add(4).add(5);
    expect().toEqual();
  });
  //

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    list.insertBefore(3, 6);
    expect().toEqual();
  });
  //

  it('Can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList;
    list.add(2);
    list.add(3);
    list.add(4);

    list.insert(1);
    expect(list.head).toEqual(1);
  });

  //
  it('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);

    list.insertAfter(2, 7);
    expect(list).toEqual('1, 2, 7, 3, 4');
  });

  //
  it('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);

    list.add(4);
    expect(current.head.next.next.next).toEqual(4);
  });

  //Code Challenge 7
  it('Where k is greater than the length of the linked list', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);

    let result = list.kthFromTheEnd(4);
    expect(result).toEqual(null);
  });

  it('Where k and the length of the list are the same', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);

    let result = list.kthFromTheEnd(3);
    expect(result).toEqual(1);
  });

  it('Where k is not a positive integer', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);

  });

  it('Where the linked list is of a size 1', () => {
    const list = new LinkedList;
    list.add(1);

    let result =
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const list = new LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);

  });

  //Code Challenge 8
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


'use strict';

const { link } = require('fs');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // traverse - from demo
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log('done traversing');
  }

  //insert - prepend
  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  //includes - returns boolean
  includes(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
        return false;
      }
    }
  }

  //to string - returns string representing all values
  toString() {
    let current = this.head;
    let linkedListString = '';

    while (current) {
      linkedListString += `{ ${current.value} } -> `;
      current = current.next;
    }
    linkedListString += 'NULL';
    return linkedListString;
  }

  // CC6 - add - append
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }


  //CC6 - Insert Before - adds a new node with the given new value immediately before the first node that has the value specified
  // Referred to stackoverflow for help: https://stackoverflow.com/questions/6824067/manual-linked-list-insert-before-method
  insertBefore(value, newValue) {
    let current = this.head;
    while(current.next !== null){
    if (current.next.value === value) {
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current = newNode;
      return;
    }
    return current;

  }

  //CC6 - Insert After - adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(value, newValue) {
    let current = this.head;
    while(current.next !== null){
      if(current.next.value === value){
        let newNode = new Node(newValue);
        newNode = current.next;
        current.next = newNode;
        return;
      }
      return current = current.next;

    }

  }
  // CC7 - kth from the end
  kthFromTheEnd(k){
    let current = this.head;
    let nodeCount = 0;
    while(current){
      current = current.next;
      nodeCount++;
      return nodeCount;
    }
    let kNode = nodeCount - k;
    if(current.next === kNode){
      return current.next.value;
    } else {
      current = current.next;
    }
  }

  //CC8 - zip lists
  zipLists(listOne, listTwo){

  }
}


let linkedList = new LinkedList();


linkedList.add('a');
linkedList.add('b');
linkedList.add('c');
linkedList.add('d');

module.exports = {
  LinkedList,
  Node,
};

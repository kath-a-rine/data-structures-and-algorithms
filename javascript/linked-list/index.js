'use strict';

const { link } = require('fs');

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  // add - from class demo
  add(value){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  //insert
  insert(value){
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  //includes - returns boolean
  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (this.current === value)
        return true;
    }
    return false;
  }

  //to string - returns string representing all values
  toString(){
    let current = this.head;
    let linkedListString = '';

    return linkedListString;
  }
}


let linkedList = new LinkedList();


linkedList.add('a');
linkedList.add('b');
linkedList.add('c');
linkedList.add('d');

module.exports = LinkedList;

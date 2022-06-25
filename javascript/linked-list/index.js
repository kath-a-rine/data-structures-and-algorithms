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

  // traverse - from demo
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log('done traversing');
  }

  // add
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

    while (current) {
      if (this.current === value) {
        return true;
      } else if (this.current !== value) {
        current = current.next;
      }
    }
    return false;
  }

  //to string - returns string representing all values
  toString(){
    let current = this.head;
    let linkedListString = '';

    while(current) {
      linkedListString += `{${current.value}} ->`;
      current = current.next;
    }
    linkedListString += 'NULL';
    return linkedListString;
  }
}


let linkedList = new LinkedList();


linkedList.add('a');
linkedList.add('b');
linkedList.add('c');
linkedList.add('d');

module.exports = LinkedList;

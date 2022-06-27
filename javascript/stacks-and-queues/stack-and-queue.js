'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    if(this.top !== null){
      let temp = this.top;
      this.top = temp.next;
      return temp;
    }
  }

  peek(){
    if(this.top !== null){
      return this.top.value;
    }
  }

  isEmpty(){
    this.top === null ? true : false;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue(){
    let temp;
    if (this.front) {
      temp = this.front;
      if (!temp.next) {
        this.back = null;
      }
      this.front = this.front.next;
      return temp.value;
    } else {
      return null;
    }
  }

  peek(){
    if(this.front){
      return this.front.value;
    }
  }

  isEmpty(){
    this.front === null ? true : false;
  }
}

module.exports = {
  Stack,
  Queue,
};

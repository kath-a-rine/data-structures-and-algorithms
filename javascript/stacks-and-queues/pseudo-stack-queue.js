'use strict';

const { Stack, Node } = require('./stack-and-queue');

class PseudoQueue{
  constructor(){
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  }

  enqueue(value){
    let newNode = new Node(value);
    if (this.inputStack.isEmpty() && this.outputStack.isEmpty()){
      this.inputStack.push(newNode);
    } else if (this.outputStack.isEmpty()) {
      this.inputStack.push(newNode);
    } else if (this.inputStack.isEmpty() && !this.outputStack.isEmpty()){
      while(!this.outputStack.isEmpty()){
        this.inputStack.push(this.outputStack.pop());
      }
      this.inputStack.push(newNode);
    }
  }

  dequeue(){
    if (this.outputStack.isEmpty()){
      while(!this.inputStack.isEmpty()){
        this.outputStack.push(this.inputStack.pop());
      }
      return this.outputStack.pop();
    } else {
      return this.outputStack.pop();
    }
  }
}

module.export = PseudoQueue;

'use strict';

const { Stack, Node } = require('./stack-and-queue');

class PseudoQueue{
  constructor(){
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  }

  enqueue(value){
    let newNode = new Node(value);
    if(this.inputStack === null && this.outputStack === null){
      this.inputStack.push(newNode);
    }

    if(this.inputStack !== null && this.outputStack === null){
      this.inputStack.push(newNode);
    }

  }

  dequeue(){
    return this.outputStack.pop();
  }
}

module.export = PseudoQueue;

'use strict';

const { Queue } = require('./stack-and-queue');

class AnimalShelter{
  constructor(){
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
  }

  enqueue(animal){
    if(animal === 'cat'){
      this.catQueue.enqueue(animal);
    } else if(animal === 'dog'){
      this.dogQueue.enqueue(animal);
    }
  }

  dequeue(pref){
    if(pref === 'cat'){
      this.catQueue.dequeue(pref);
    } else if(pref === 'dog'){
      this.dogQueue.dequeue(pref);
    } else {
      return null;
    }
  }
}


module.exports = AnimalShelter;

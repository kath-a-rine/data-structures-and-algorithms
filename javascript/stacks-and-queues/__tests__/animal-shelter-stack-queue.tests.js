'use strict';

const AnimalShelter = require('../animal-shelter-stack-queue');
const { Queue } = require('../stack-and-queue');

let animalShelter = new AnimalShelter();

describe('Animal shelter tests', () => {

  test('Can successfully enqueue a pet',() => {
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');

    expect(animalShelter.catQueue.back.value).toEqual('cat');
    expect(animalShelter.dogQueue.back.value).toEqual('dog');
  });

  test('Can successfully dequeue a preferred pet',() => {
    animalShelter.dequeue('cat');
    animalShelter.dequeue('dog');

    expect(animalShelter.catQueue.back.next).toBeNull();
    expect(animalShelter.dogQueue.back.next).toBeNull();
  });

});

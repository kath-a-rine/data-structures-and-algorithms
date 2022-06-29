'use strict';

// “Happy Path” - Expected outcome
// Expected failure
// Edge Case (if applicable/obvious)

const PseudoQueue = require('./stack-and-queue.tests');
let queue = new PseudoQueue();

describe('PseudoQueue Tests', () => {

  test('“Happy Path” - Expected outcome', () => {
    let result = queue.enqueue(10);

    expect(result).toEqual();
  });

  test('expected failure', () => {

  });

  test('edge case placeholder', () => {

  });
});

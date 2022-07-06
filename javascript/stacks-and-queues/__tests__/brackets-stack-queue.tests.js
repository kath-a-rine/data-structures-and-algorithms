'use strict';

const validate = require('../brackets-stack-queue');

describe('bracket test', () => {


  test('Can validate brackets',() => {
    let stringOne = validate('{}');
    let stringTwo = validate('{]((');

    expect(stringOne).toBe(true);
    expect(stringTwo).toBe(false);
  });

});

'use strict';

describe('insertion sort tests', () => {
  test('can successfully sort a given array', () => {
    let arr  = [8, 4, 23, 42, 16, 15];
    let result = insertionSort(arr);

    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  })
})

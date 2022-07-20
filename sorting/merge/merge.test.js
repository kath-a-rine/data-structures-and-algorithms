const mergeSort = require('./index');

describe('merge tests', () => {
  test('function successfully sorts and merges an array', () => {
    let array = [8, 4, 23, 42, 16, 15];
    let result = mergeSort(array);

    expect(result[0]).toEqual(4);
    expect(result[5]).toEqual(42);
  });

  // from code review
  test('can sort an array length of 1', () => {
    let arr = [1];
    expect(mergeSort(arr)).toEqual([1]);
  })

  test('can sort an array length of 2', () => {
    let arr = [2, 1];
    expect(mergeSort(arr)).toEqual([1, 2]);
  })

  test('can sort an array length of 3', () => {
    let arr = [2, 3, 1];
    expect(mergeSort(arr)).toEqual([1, 2, 3]);
  })

  test('can sort an array length of n', () => {
    let arr = [];

    for(let i = 1; i <=10; i++){
      arr.push(Math.floor(Math.random() * 10))
    }

    expect(mergeSort(arr)).toEqual(arr.sort());
  })
})

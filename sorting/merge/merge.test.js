import { merge, mergeSort } from "./index";

describe('merge tests', () => {
  test('function successfully sorts and merges an array', () => {
    let array = [8, 4, 23, 42, 16, 15];
    let result = mergeSort(array);

    expect(result[0]).toEqual(4);
    expect(result[5]).toEqual(42);
  })
})

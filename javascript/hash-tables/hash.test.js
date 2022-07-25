'use strict';

const HashTable = require('./hash-tables');

let table = new HashTable(1024);

table.set('Katharine', 34);
table.set('Dave', 31);
table.set('Zach', 35);
table.set('Justine', 34);
table.set('Sid', 34);


describe('HashTable tests', () => {
  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    table.set('Brady', 35);

    expect(table[5]).toEqual({'Brady': 35});
  });

  test('Retrieving based on a key returns the value stored', () => {
    let returnedValue = table.get('Dave');

    expect(returnedValue).toEqual(31);

  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let findBrady = table.get('Brady');

    expect(findBrady).toEqual(null);
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    
  });

  test('Successfully handle a collision within the hashtable', () => {

  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

  });

  test('Successfully hash a key to an in-range value', () => {

  });
});

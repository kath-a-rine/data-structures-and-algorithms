'use strict';

const {LinkedList} = require('../linked-list/index');

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  /**
   * @param {String} ket
   * @returns
   */

  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;

    return initialHash % 1024;
  }

  set(key, value){
    let position = this.hash(key);
    let data = {[key]: value};

    if(this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);

      this.buckets[position] = bucket;
    }
  }

  get(key){
    let position = this.hash(key);

    if(this.buckets[position]){
      let bucket = this.buckets[position];
      let value = bucket.head.value[key];
      return value;
    } else {
      return null;
    }
  }

  // argument: key, returns boolean - does key exist in table?
  contains(key){
    let position = this.hash(key);
    if(this.buckets[position]){
      return true;
    } else {
      return false;
    }
  }

  // returns collection of keys - Q: doesn't take in an argument - how is best to define key?
  keys(){
    let keyArr = [];
    let position = this.hash(key);
    while(this.buckets[position]){
      keyArr.push(this.buckets[position]);
    }
    return keyArr;
  }
}

let table = new HashTable(1024);
table.set('Katharine', 34);
table.set('Dave', 31);
table.set('Zach', 35);
table.set('Justine', 34);
table.set('Sid', 34);

console.log(table);

module.exports = HashTable;

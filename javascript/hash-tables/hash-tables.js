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

  repeatedWord(string){
    let splitString = string.split('');
    for(let i = 0; i < splitString.length; i++){

    };
  }

  leftJoin(hashOne, hashTwo){
    let finalArr = [];
    if(hashOne.buckets){
      let value = hashOne.get(key); // unsure how to pull out key from hashtable for use in get method
      let newArr = new Array();
      newArr.push(key, value);
      finalArr.push(newArr);
    }
    for(let i = 0; i < finalArr.length; i ++){
      let bool = hashTwo.contains(finalArr[i][0]);
      if(bool === true){
        let value = hashTwo.get(key);
        finalArr[i].push(value);
      } else {
        finalArr[i].push(null);
      }
    }
    return finalArr;
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

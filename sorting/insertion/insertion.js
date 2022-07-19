'use strict';

let arr = [8, 4, 23, 42, 16, 15]

function insertionSort(arr) {
  for(i = 1; 1 < arr.length; i++){
    let j = i-1;
    let temp = arr[i];
    while((j >= 0) && (temp = arr[j])){
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j+1] = temp;
  }
}

insertionSort(arr);

module.exports = insertionSort;

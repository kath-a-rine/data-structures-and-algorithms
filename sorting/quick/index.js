'use strict';

let arr = [8, 4, 23, 42, 16, 15]

function quickSort(arr, left, right){
  if(left < right){
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
}

function partition(arr, left, right){
  let pivot = arr[right];
  let low = left - 1;
  // unfinished for loop
  // pseudocode:
  // for i <- left to right do
  // if arr[i] <= pivot
  //     low++
  //     Swap(arr, i, low)

  swap(arr, right, low + 1);
  return low + 1;
}

function swap(arr, i, low){
  let temp = 0;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = quickSort;

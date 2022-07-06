'use strict';

const { Stack } = require('./stack-and-queue');

function validate(string){
  let stack = new Stack();
  if(string[0] === (']' || '}' || ')')){
    return false;
  }
  for(let i=0; i < string.length; i++){
    if(string[i] === ('[' || '{' || '(')) {
      stack.push(string[i]);
      continue;
    } else if (string[i] === (']' || '}' || ')')){
      let top = stack.peek();
      if((top === '[' && string[i] === ']') || (top === '{' && string[i] === '}') || (top === '(' && string[i] === ')')){
        stack.pop();
        return true;
      } else {
        return false;
      }
    }
  }
}

module.exports = validate;

'use strict';

const { Stack, Queue } = require('../stack-and-queue');


describe('Stacks and queues tests', () => {

  test('Can successfully push onto a stack',() => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1);
  });

  test('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });

  test('Can successfully pop off the stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.pop();

    expect(stack.top).toBeNull();
  });

  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toBeNull();
  });

  test('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    let peek = stack.peek();

    expect(peek).toEqual(2);
  });

  test('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    let emptyStack = stack.isEmpty();

    expect(emptyStack).toEqual(undefined);
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack;
    let stackOne = stack.pop();
    let stackTwo = stack.peek();

    expect(stackOne).toEqual(undefined);
    expect(stackTwo).toEqual(undefined);
  });

  test('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(3);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(3);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let result = queue.dequeue();
    expect(result).toEqual(1);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    let value = queue.peek();
    expect(value).toEqual(1);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    let empty = queue.isEmpty();
    expect(empty).toEqual(undefined);
  });

  test('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();

    expect(queue.front).toBeNull();
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();
    let emptyOne = queue.dequeue();
    let emptyTwo = queue.peek();

    expect(emptyOne).toBeNull();
    expect(emptyTwo).toEqual(undefined);
  });

});

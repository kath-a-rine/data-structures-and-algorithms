const HashTable = require('../hash-tables/hash-tables');
const { Node, BinaryTree } = require('../trees/trees');

function treeIntersection(treeOne, treeTwo){
  let results = [];

  const table = new HashTable(1024);

  let rootOne = treeOne.root;
  const traverse = node => {
    table.set(String(node.value), node.value);
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
  };
  traverse(rootOne);



  const compare = (treeTwo) => {
    let rootTwo = treeTwo.root;
    const traverseTwo = node => {
      let result = table.contains(node.value);
      if(result === true) results.push(node.value);

      if(node.left) traverseTwo(node.left);
      if(node.right) traverseTwo(node.right);
    };
    traverseTwo(rootTwo);
  };
  compare(treeTwo);
  return results;
}

let treeOne = new BinaryTree();
treeOne.root = new Node(10);
treeOne.root.left = new Node(5);
treeOne.root.right = new Node(15);
treeOne.root.left.left = new Node(1);
treeOne.root.left.right = new Node(8);
treeOne.root.right.right = new Node(20);

let treeTwo = new BinaryTree();
treeTwo.root = new Node(2);
treeTwo.root.left = new Node(5);
treeTwo.root.right = new Node(15);
treeTwo.root.left.left = new Node(7);
treeTwo.root.left.right = new Node(22);
treeTwo.root.right.right = new Node(20);

//expected output = 5, 15, 20

let compareTrees = treeIntersection(treeOne, treeTwo);
console.log(compareTrees);

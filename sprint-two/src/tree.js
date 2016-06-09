var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, node, result) {
  node = node || this;
  result = result || false;
  if (node.value === target) {
    result = true;
  }

  for (var i=0; i<node.children.length; i++) {
    result = this.contains(target, node.children[i], result);
  }

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

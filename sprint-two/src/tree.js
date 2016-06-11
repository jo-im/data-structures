var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  if (this.value) {
    child.parent = this;
  }
  this.children.push(child);
};

treeMethods.traverse = function(callback, node) {
  node = node || this;
  
  if (node.value) {
    //Are we able to return the callback here, or just execute without a return statement?
    callback(node);
  }

  for (var i = 0; i < node.children.length; i++) {
    this.traverse(callback, node.children[i]);
  }

};

treeMethods.contains = function(target, node, result) {
  node = node || this;
  result = result || false;
  if (node.value === target) {
    result = true;
  }

  for (var i = 0; i < node.children.length; i++) {
    result = this.contains(target, node.children[i], result);
  }

  return result;
};

treeMethods.removeFromParent = function(target) {
  //disassociate node from parent and create two discrete trees
  var newParent;

  var removalCallback = function(nodeObject) {
    if (nodeObject.value === target) {
      //Split the child off into its own family :_) goodbye baby bird
      newParent = nodeObject;
      //Remove the child from the parent 
      var oldParent = newParent.parent;
      var removedChildIndex = oldParent.children.indexOf(newParent);
      oldParent.children.splice(removedChildIndex, 1);
      //Set the new parent's parent to null
      newParent.parent = null;
    }
  };

  this.traverse(removalCallback, this);

  return newParent;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

BinarySearchTree.prototype.insert = function(value, node) {
  node = node || this;
  if (value < node.value) {
    if (node.left === null) {
      node.left = BinarySearchTree(value);
    } else {
      this.insert(value, node.left);//recurse on the left child
    }
  } else if (value > node.value) {
    if (node.right === null) {
      node.right = BinarySearchTree(value);
    } else {
      this.insert(value, node.right);//recurse on the right child
    }
  }
};

BinarySearchTree.prototype.contains = function(value, node, result) {
  node = node || this;
  result = result || false;
  if (node.value === value) {
    //if node's value matches value, pass result as true
    result = true;
  } else if (value < node.value && node.left) {
    //recurse contains on the left child of node
    result = this.contains(value, node.left, result);
  } else if (value > node.value && node.right) {
    //recurse contains on the right child of node
    result = this.contains(value, node.right, result);
  }
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb, node) {
  node = node || this;
  cb(node.value);
  if (node.left) {
    this.depthFirstLog(cb, node.left);
  }
  if (node.right) {
    this.depthFirstLog(cb, node.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
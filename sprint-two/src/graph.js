// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

Graph.prototype.indexOfNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    var nodeName = (this.nodes[i]).name;
    if (nodeName === node) {
      return i;
    }
  }
  return -1;
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var nodeObject = {name: node, edges: []};
  this.nodes.push(nodeObject);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.indexOfNode(node) > -1) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].edges.indexOf(node) > - 1) {
      var index = this.nodes[i].edges.indexOf(node);
      this.nodes[i].edges.splice(index, 1);
    }
    if (this.nodes[i].name === node) {
      this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.indexOfNode(fromNode);
  if (this.nodes[fromNodeIndex].edges.indexOf(toNode) > - 1) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.indexOfNode(fromNode);
  var toNodeIndex = this.indexOfNode(toNode);

  this.nodes[fromNodeIndex].edges.push(toNode);
  this.nodes[toNodeIndex].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.indexOfNode(fromNode);
  var toNodeIndex = this.indexOfNode(toNode);
  var removeFromNodeIndex = this.nodes[toNodeIndex].edges.indexOf(fromNode);
  this.nodes[toNodeIndex].edges.splice(removeFromNodeIndex, 1);
  var removeToNodeIndex = this.nodes[fromNodeIndex].edges.indexOf(toNode);
  this.nodes[fromNodeIndex].edges.splice(removeToNodeIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].name);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



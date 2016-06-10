var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    if (list.head === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      (list.tail).next = Node(value);
      list.tail = (list.tail).next;
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target, node) {

    node = node || list.head;

    if (node.value === target) {
      return true;
    } else if (node.next) {
      return list.contains(target, node.next);
    } else {
      return false;
    }
    
  };

  list.addToHead = function(value) {

  };

  list.removeTail = function(value) {

  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

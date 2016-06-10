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
      var tempNode = list.tail;
      list.tail = (list.tail).next;
      list.tail.previous = tempNode;
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    if (list.head) {
      list.head.previous = null;
    }
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
    //first need to check for null head (this means no nodes in list)
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      //have list.head equal to a new object created by Node
      //list.head.next is equal to the previous head
      list.head.previous = Node(value);
      var tempNode = list.head;
      list.head = (list.head).previous;
      list.head.next = tempNode;
    }
    
  };

  list.removeTail = function() {
    //have list.tail equal to the previous value of list.tail
    //set list.tail.next to null
    var temp = list.tail;
    list.tail = list.tail.previous;
    if (list.tail) {
      list.tail.next = null;
    }
    return temp.value; 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var head, tail;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (length === 0) {
      head = 0;
      tail = 0;
    } else {
      tail++;
    }
    length++;
    storage[tail] = value;
  };

  someInstance.dequeue = function() {
    
    var temp = storage[head];
    head++;

    length = Math.max(0, length-1);
    return temp;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    length: 0,
    head: 0,
    tail: 0,
    storage: {}
  };

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {

  enqueue: function(value) {
    if (this.length === 0) {
      this.head = 0;
      this.tail = 0;
    } else {
      this.tail++;
    }
    this.length++;
    this.storage[this.tail] = value;
  },

  dequeue: function() {

    var temp = this.storage[this.head];
    this.head++;

    this.length = Math.max(0, this.length - 1);
    return temp;
  },

  size: function() {
    return this.length;
  }

};



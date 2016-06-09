var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.head = 0,
  someInstance.tail = 0,
  someInstance.length = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    if (this.length === 0) {
      this.head = 0, this.tail = 0;
    } else {
      this.tail++;
    }
    this.storage[this.tail] = value;
    this.length++;
  },

  dequeue: function() {
    var temp = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    this.length = Math.max(0, this.length - 1);
    return temp;
  },

  size: function() {
    return this.length;
  }
};



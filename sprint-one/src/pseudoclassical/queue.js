var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.tail = 0;
  this.head = 0; 
};

Queue.prototype.enqueue = function(value) {
  if (this.length === 0) {
    this.head = 0, this.tail = 0;
  } else {
    this.tail++;
  }
  this.storage[this.tail] = value;
  this.length++;

};

Queue.prototype.dequeue = function() {
  var temp = this.storage[this.head];
  delete this.storage[this.head];
  this.head++;
  this.length = Math.max(0, this.length - 1);
  return temp;
};

Queue.prototype.size = function() {
  return this.length;
};

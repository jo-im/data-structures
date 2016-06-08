var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    key: 0,
    storage: {}
  };
  
  // Use an object with numeric keys to store values
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {

  push : function(value) {
    this.key++;
    this.storage[this.key] = value;
  },

  pop : function() {
    var temp = this.storage[this.key];
    delete this.storage[this.key];
    this.key = Math.max(0, this.key - 1);
    return temp;
  },

  size : function() {
    return this.key;
  }
};



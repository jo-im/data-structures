var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    key++;
    storage[key] = value;
  };

  someInstance.pop = function() {
    var temp = storage[key];
    delete storage[key];
    key = Math.max(0, key - 1);
    return temp;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //Need to check whether this._storage already has a value at the index
  //If so, check if there is a bucket
  //If there is, push (k,v) tuple to bucket
  //Else, create bucket and push (k,v) tuple
  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
  } else {
    //Iterate through "bucket" to make sure that tuple with same key doesn't exist already
    var kWasFound = false;
    for (var i=0; i<this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        kWasFound = true;
      }
    }
    if (!kWasFound) {
      this._storage[index].push([k, v]);
    }  
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i=0; i<this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i=0; i<this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



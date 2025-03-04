var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this._storage[item] = item;
};

setPrototype.contains = function(item) {
	var flag = false;
	if (this._storage[item] === item) {
		flag = true;
	}
	return flag;
};

setPrototype.remove = function(item) {
	delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/**
 * initialize your data structure here.
 */
 var MinStack = function () {
  this.stack = [];
  this.minS = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (!this.minS.length || this.minS[this.minS.length - 1] >= x) {
      this.minS.push(x);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  if (!this.stack.length) return null;
  const x = this.stack.pop();
  if (x === this.minS[this.minS.length - 1]) this.minS.pop();
  return x;
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  if (!this.stack.length) return null;
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.min = function () {
  return this.minS[this.minS.length - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/
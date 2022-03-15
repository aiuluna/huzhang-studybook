var CQueue = function() {
  this.stack_1 = [];
  this.stack_2 = [];
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function(value) {
  this.stack_1.push(value);
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {
  if (!this.stack_2.length) {
      while(this.stack_1.length) {
          this.stack_2.push(this.stack_1.pop())
      }
  }
  if (!this.stack_2.length) return -1;
  return this.stack_2.pop()
};

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/
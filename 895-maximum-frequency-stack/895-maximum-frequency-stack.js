
var FreqStack = function() {
    this.stack = [];
    this.freq = {};
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    this.freq[val] = this.freq[val] + 1 || 1;
    
    if (!this.stack[this.freq[val] - 1]) {
        this.stack[this.freq[val] - 1] = [];
    }
    
    this.stack[this.freq[val] - 1].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const lastIndex = this.stack.length - 1;
    const el = this.stack[lastIndex].pop();
    this.freq[el]--;
    
    if (this.stack[lastIndex].length === 0) {
        this.stack.pop();
    }
    
    return el;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
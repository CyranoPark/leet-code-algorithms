/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let poppedIndex = 0;
    const result = [];
    
    for (let i = 0; i < pushed.length; i++) {
        result.push(pushed[i]);
        
        while (poppedIndex < popped.length && popped[poppedIndex] === result[result.length - 1]) {
            poppedIndex++;
            result.pop();
        }
    }
    
    return !result.length;
    
};

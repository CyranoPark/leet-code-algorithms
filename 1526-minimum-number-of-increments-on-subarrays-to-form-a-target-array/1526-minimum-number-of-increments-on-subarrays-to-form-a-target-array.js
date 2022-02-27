/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    
    return target.reduce((acc, item, i) => {
        if (item - target[i - 1] > 0) {
            return acc + item - target[i - 1];
        }
        return acc;
    });
};
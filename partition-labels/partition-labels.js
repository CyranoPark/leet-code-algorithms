/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const result = [];
    const memo = {};
    let count = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (!memo.hasOwnProperty(s[i])) {
            memo[s[i]] = i;
        }
    }
    
    for (let j = 0; j < s.length; j++) {
        count = Math.max(memo[s[j]], count);
        
        if (j === count) {
            result.push(count + 1);
        }
    }
    
    return result.map((r, i) => r - (result[i - 1] || 0));
    
};
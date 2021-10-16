/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const memo = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!memo[s[i]]) {
            memo[s[i]] = 0;
        }
        memo[s[i]]++;
    }
    
    console.log(memo)
    
    for (let j = 0; j < s.length; j++) {
        if (memo[s[j]] === 1) {
            return j;
        }
    }
    
    return -1;
};
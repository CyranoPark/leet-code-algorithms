/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const letters = {};
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        letters[s[i]] = letters[s[i]] ? letters[s[i]] + 1 : 1;
        
        if (letters[s[i]] > 1) {
            letters[s[i]] = 0;
            count += 2;
        }
    }
    
    const hasSingle = Object.values(letters).some(v => v);
    
    return count + (hasSingle ? 1 : 0);
};
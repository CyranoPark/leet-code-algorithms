/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const letters = {};
    const count = s.split('').reduce((acc, letter) => {
        letters[letter] = letters[letter] ? letters[letter] + 1 : 1;
        
        if (letters[letter] > 1) {
            letters[letter] = 0;
            acc += 2;
        }
        
        return acc;
    }, 0);
    const hasSingle = Object.values(letters).some(v => v);
    
    return count + (hasSingle ? 1 : 0);
};

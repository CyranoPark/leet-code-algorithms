/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = [];
    
    for(let i = 0; i <= n; i++) {
        if (i < 1) {
            result.push(i);
            continue;
        }
        
        const digit = Math.floor(Math.log2(i));
        const rest = i - Math.pow(2, digit);
        
        result[i] = result[rest] + 1;
    }
    
    return result;
    
};
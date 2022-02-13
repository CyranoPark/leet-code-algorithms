/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let count = 0;
    
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);
    
    g.forEach((greed, i) => {
        if (s[count] >= greed) {
            count++;
        }
    })
    
    return count;
};
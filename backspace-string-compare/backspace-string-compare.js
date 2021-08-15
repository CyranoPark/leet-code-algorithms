/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    console.log(fn(s), fn(t)) 
    return fn(s) === fn(t);
    
    function fn (str) {
        const result = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '#') {
                if (result.length > 0) {
                    result.pop();    
                }
            } else {
                result.push(str[i]);
            }
            
        }    
        return result.join('');
    }
    
    
};
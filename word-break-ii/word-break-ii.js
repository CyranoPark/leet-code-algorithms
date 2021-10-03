/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const result = [];
    
    fn(0, []);
    
    return result;
  
    function fn(start, arr) {
        if (start === s.length) {
            result.push(arr.join(' '));
            return;
        }
        
        for (let i = start; i < s.length; i++) {
            const string = s.slice(start, i + 1);
            const hasDict = wordDict.includes(string);
            
            if (hasDict) {
                const newArr = arr.slice();
                newArr.push(string);
                fn(i + 1, newArr);
            }
        }
    }
};
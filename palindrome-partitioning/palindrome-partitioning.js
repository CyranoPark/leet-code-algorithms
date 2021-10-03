/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    let current = 0;
    
    fn(0, []);
    
    return result;

    function fn (start, arr) {
        if (start === s.length) {
            result.push(arr);
            return;
        }
        
        for (let i = start; i < s.length; i++) {
            const string = s.slice(start, i + 1);
            const reversed = string.split('').reverse().join('');
            
            if (string === reversed) {
                const newArr = arr.slice();
                newArr.push(string);
                fn(i + 1, newArr);
            }
        }
    }
};

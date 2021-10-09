/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    fn(candidates, [], 0);
    
    return result;
    
    function fn (arr, nums, total) {
        for (let i = 0; i < arr.length; i++) {
            const num = total + arr[i];
            
            if (num === target) {
                result.push([...nums, arr[i]]);
                return;
            }
            
            if (num < target) {
                fn(arr.slice(i), [...nums, arr[i]], num);
            }
        }    
    }
};
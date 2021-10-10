/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    fn(nums, []);
    
    return result;
    
    function fn(arr, permutations) {
        if (permutations.length === nums.length) {
            result.push(permutations);
            return;
        }
        for(let i = 0; i < arr.length; i++) {
            fn(arr.filter(item => item !== arr[i]), [...permutations, arr[i]])
        }
    }
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    fn(nums, []);
    
    return result;
    
    function fn(arr, permutation) {
        if (permutation.length === nums.length) {
            result.push(permutation);
            return;
        }
        for(let i = 0; i < arr.length; i++) {
            fn(arr.filter(item => item !== arr[i]), [...permutation, arr[i]])
        }
    }
};
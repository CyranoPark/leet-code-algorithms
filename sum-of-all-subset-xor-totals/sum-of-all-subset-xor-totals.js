/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let count = 0;
    
    fn(nums, 0);
    
    return count;
    
    function fn (arr, total) {
        for (let i = 0; i < arr.length; i++) {
            const xor = arr[i] ^ total;
            count += xor;
            fn(arr.slice(i + 1), xor);
        }    
    }
};
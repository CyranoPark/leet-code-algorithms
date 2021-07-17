/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  
    return binarySearch(0, nums.length - 1);
    
    function binarySearch(from, to) {
        const pivot = from + Math.floor((to - from) / 2);
        
        if (nums[pivot] !== nums[pivot + 1] && nums[pivot] !== nums[pivot - 1]) {
            return nums[pivot];
        }
        
        if (pivot % 2 === 0) {
            if (nums[pivot] === nums[pivot + 1]) {
                return binarySearch(pivot + 2, to);
            } else {
                return binarySearch(from, pivot);
            }
        } else {
            if (nums[pivot] === nums[pivot + 1]) {
                return binarySearch(from, pivot);
            } else {
                return binarySearch(pivot + 1, to);
            }
        }
        
    }
};

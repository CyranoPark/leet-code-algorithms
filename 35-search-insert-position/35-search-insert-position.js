/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        const mid = Math.floor((end + start) / 2);

        if (target < nums[mid]) {
            end = mid - 1;
            continue;
        }
        
        if (target > nums[mid]) {
            start = mid + 1;
            continue;
        }

        return mid;
    }

    return start;
};
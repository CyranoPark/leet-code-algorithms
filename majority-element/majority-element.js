/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let major = null;
    
    nums.forEach(num => {
        if (count === 0) {
            major = num;
        }
        
        if (major === num) {
            count++;
        } else {
            count--;
        }
    });
    
    return major;
};
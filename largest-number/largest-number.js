/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const sorted = [...nums].sort((a, b) => {
        const aStr = a.toString();
        const bStr = b.toString();
        
        return parseInt(bStr + aStr) - parseInt(aStr + bStr);
        
    });
    
    return removeZero(sorted).join('');

    
    function removeZero(nums) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === 0) {
                nums[i] = '';
            } else {
                return nums;
            }
        }
        
        return nums;
    }
    
};

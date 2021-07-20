/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const hash = {};
    const result = [];
    
    nums.forEach(num => {
        if(!hash[num]) {
            hash[num] = true;
        }
    })
    
    for (let i = 1; i <= nums.length; i++) {
        if (!hash[i]) {
            result.push(i);
        }
    }
    
    return result;
};
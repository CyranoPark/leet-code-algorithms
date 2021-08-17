/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const sorted = [...nums].sort((a, b) => b - a);
    
    for (let i = 0; i < sorted.length - 2; i++) {
        const restSum = sorted[i + 1] + sorted[i + 2];
        if (sorted[i] < restSum) {
            return restSum + sorted[i];
        }
    }
    
    return 0;
};
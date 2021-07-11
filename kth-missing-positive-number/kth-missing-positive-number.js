/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let n = k;
    for (let i = 0; i < arr.length; i++) {
        const prevNumber = arr[i - 1] || 0;
        const missingCount = arr[i] - prevNumber - 1;
        
        if (n <= missingCount) {
            return prevNumber + n;
        }
        
        if (n > missingCount) {
            n -= missingCount;
        }
        
    }
    
    return arr[arr.length - 1] + n;
};

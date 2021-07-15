/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    
    return binarySearchKth(0, arr.length - 1);
    
    function binarySearchKth(from, to) {
        if (from === to) {
            const missingCount = getMissingCount(from);
            
            return arr[from] +
                (k - missingCount) -
                (missingCount >= k ? 1 : 0);
        }
        
        const centerIndex = Math.floor((to - from) / 2) + from;
        
        if (getMissingCount(centerIndex) >= k) {
            return binarySearchKth(from, centerIndex);
        } else {
            return binarySearchKth(centerIndex + 1, to);
        }
    }
    
    function getMissingCount(i) {
        return arr[i] - i - 1;
    }
    
};

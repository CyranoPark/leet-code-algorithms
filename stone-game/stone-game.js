/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    
    return getMaximum(piles, true) > (Math.max(...piles) / 2);
    
    function getMaximum(stones, isFirst) {
        const n = stones.length;
        const start = stones[0];
        const end = stones[n - 1];
        const pivot = isFirst ? start : 0;
        
        
        if (n === 1) {
            if (isFirst) {
                return start;
            } else {
                return 0;
            }
            
        }
        
        const startMax = pivot + getMaximum(stones.slice(1), !isFirst);
        const endMax = pivot + getMaximum(stones.slice(-1), !isFirst);
        
        return Math.max(startMax, endMax);
    }  
};

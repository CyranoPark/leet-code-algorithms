/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {

    const num = fn(piles, true);
    
    return num;
    function fn (stones, isFirst) {
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
        
        const startMax = pivot + fn(stones.slice(1), !isFirst);
        const endMax = pivot + fn(stones.slice(-1), !isFirst);
        
        console.log(startMax, endMax)
        return Math.max(startMax, endMax);
    }
    
    
};
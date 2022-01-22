/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let from = 0;
    let to = num;
    
    while(from <= to) {
        const mid = Math.floor((from + to) / 2);
        const square = mid * mid;
        
        if (square === num) return true;
        
        if (square > num) {
            to = mid - 1;
        }
        
        if (square < num) {
            from = mid + 1;
        }
    }

    return false;
};
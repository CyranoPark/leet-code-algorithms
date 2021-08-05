/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let heightTotal = 0;
    let maxIndex = 0;
    let maxFromRight = 0;
    let maxFromLeft = 0;
    let total = 0;
    
    for (let i = 0; i < height.length; i++) {
        heightTotal += height[i];
        maxIndex = height[i] > height[maxIndex] ? i : maxIndex;
    }
    
    for (let i = 0; i <= maxIndex; i++) {
        maxFromRight = height[i] > maxFromRight ? height[i] : maxFromRight;
        total += maxFromRight;
    }
    
    for (let i = height.length - 1; i > maxIndex; i--) {
        maxFromLeft = height[i] > maxFromLeft ? height[i] : maxFromLeft;
        total += maxFromLeft;
    }
    
    return total - heightTotal;
};

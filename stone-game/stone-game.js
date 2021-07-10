/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {

  const minCounter = Math.min(
    getMaximum(piles.slice(1), true),
    getMaximum(piles.slice(0, -1), true)
  );
  const sum = piles.reduce((acc, number) => acc + number);
  
  return minCounter < sum / 2;

  function getMaximum(stones, isFirst) {
    const n = stones.length;
    const start = stones[0];
    const end = stones[n - 1];
    const startPivot = isFirst ? start : 0;
    const endPivot = isFirst ? end : 0;


    if (n === 2) {
      if (start > end) {
        return isFirst ? start : end;
      } else {
        return isFirst ? end : start;
      }
    }

    const startMax = startPivot + getMaximum(stones.slice(1), !isFirst);
    const endMax = endPivot + getMaximum(stones.slice(0, -1), !isFirst);

    return Math.max(startMax, endMax);
  }
};

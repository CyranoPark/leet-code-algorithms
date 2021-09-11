/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {

    return timeSeries.reduce((poisoned, time, i) => {
        if (timeSeries[i + 1] && timeSeries[i + 1] - time < duration) {
            return poisoned + timeSeries[i + 1] - time;
        }
        return poisoned + duration;
    }, 0);
};
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const passengersByDistance = {};
    
    for (let i = 0; i < trips.length; i++) {
        const trip = trips[i];
        
        for (let j = trip[1]; j < trip[2]; j++) {
            if (!passengersByDistance[j]) {
                passengersByDistance[j] = 0;
            }
            
            passengersByDistance[j] += trip[0];

            if (passengersByDistance[j] > capacity) {
                return false;
            }
        }
    }
    
    return true;
};
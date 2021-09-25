/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let currentTime = 0;
    
    const waiting = customers.reduce((total, customer) => {
        const extra = customer[0] > currentTime ? 0 : currentTime - customer[0];
        const start = customer[0] + extra;
        
        currentTime = start + customer[1];
        return total + customer[1] + extra;
    }, 0);
    
    return waiting / customers.length;
};
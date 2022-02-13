/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let total = 0;
    
    worker.forEach(ability => {
        let pay = 0;
        
        difficulty.forEach((diff, i) => {
            if (ability >= diff && profit[i] > pay) {
                pay = profit[i];
            }
        });
        
        total += pay;
    });
    
    return total
};
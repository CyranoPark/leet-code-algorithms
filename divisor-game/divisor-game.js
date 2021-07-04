/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    const memo = {
        1: false,
        2: true,
    };
    
    const fn = (n) => {
        if (memo[n] === undefined) {
            for (let i = 1; i < n; i++) {
                if (n % i === 0 && !fn(n - i)) {
                    memo[n] = true;
                    return true;
                }
            }        
            memo[n] = false;
            return false;
        }
        
        return memo[n];
    }

    return fn(n);
};
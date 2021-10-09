/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    
    fn(0, []);
    
    return result;
    
    function fn(start, queenLocations) {
        if (queenLocations.length === n) {
            result.push(queenLocations);
            return;
        }
        
        for (let i = 0; i < n; i++) {
            if (isPossible([start, i], queenLocations)) {
                const emptyLine = new Array(n).fill('.');
                emptyLine[i] = 'Q';
                
                fn(start + 1, [...queenLocations, emptyLine.join('')]);
            }
        }
    }
    
    function isPossible(coords, queenLocations) {
        if (!queenLocations.length) return true;

        return queenLocations.every((location, y) => {
            const x = location.indexOf('Q');
            const [i, j] = coords;
            
            if (y === i || x === j) {
                return false;
            }
            
            if (Math.abs(y - i) === Math.abs(x - j)) {
                return false;
            }
            
            return true;
        })
    }
};
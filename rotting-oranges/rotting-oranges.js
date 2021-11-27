/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid, minutes = 0) {
    const nextRotted = [];
    let hasFresh = false;
    
    const findNextRotted = (row, col) => {
        // left
        if (grid[row][col - 1] === 1) {
            nextRotted.push([row, col - 1]);
        }
        // right
        if (grid[row][col + 1] === 1) {
            nextRotted.push([row, col + 1]);
        }
        // up
        if (grid[row - 1]?.[col] === 1) {
            nextRotted.push([row - 1, col]);
        }
        // down
        if (grid[row + 1]?.[col] === 1) {
            nextRotted.push([row + 1, col]);
        }
    }
    
    grid.forEach((row, i) => {
        row.forEach((col, j) => {
            if (col === 2) {
                findNextRotted(i, j);
            }
            if (col === 1) {
                hasFresh = true;
            }
        });
    }, []);
    
    if (!nextRotted.length) {
        if (hasFresh) {
            return -1;
        } else {
            return minutes;
        }
    }
    
    let rottedOrange = nextRotted.shift();
    
    while (rottedOrange) {
        const [i, j] = rottedOrange;
        grid[i][j] = 2;
        rottedOrange = nextRotted.shift();
    }
    
    return orangesRotting(grid, minutes + 1);
};
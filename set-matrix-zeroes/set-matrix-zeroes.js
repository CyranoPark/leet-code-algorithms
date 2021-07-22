/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const hash = {
        row: {},
        col: {}
    };
    
    matrix.forEach((row, i) => {
        row.forEach((col, j) => {
            if (col === 0) {
                hash.row[i] = true;
                hash.col[j] = true;
            }
        });
    });
    
   matrix.forEach((row, i) => {
        row.forEach((col, j) => {
            matrix[i][j] = isZero(i, j) ? 0 : col;
        });
    });
    
    return matrix;

    function isZero(m, n) {
        return hash.row[m] || hash.col[n];
    }
};
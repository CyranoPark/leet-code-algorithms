/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const row = mat.length;
    const col = mat[0].length;
    
    if (row * col !== r * c) {
        return mat;
    }
    
    const result = [];
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const lastIndex = result.length ? result.length - 1 : 0;
            const num = mat[i][j];
            
            if (!result[lastIndex]) {
                result.push([]);
            }
            
            if (result[lastIndex].length < c) {
                result[lastIndex].push(num);
            } else {
                result.push([]);
                result[lastIndex + 1].push(num);
            }            
        }
    }
    
    return result;
};
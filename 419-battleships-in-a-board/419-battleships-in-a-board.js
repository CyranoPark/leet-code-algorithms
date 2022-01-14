/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    
    board.forEach((row, i) => {
        row.forEach((col, j) => {
            if (col === 'X') {
                search(i, j);
                count++;
            }
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        });
    });
    
    function search(i, j) {
        
        board[i][j] = 'O';
        
        if (board[i][j + 1] === 'X') {
            search(i, j + 1);
            return;
        }
        
        if (board[i + 1]?.[j] === 'X') {
            search(i + 1, j);
            return;
        }
    }

    return count;
};
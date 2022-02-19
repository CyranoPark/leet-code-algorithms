/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    if (n % 2 === 0) return [];
    
    const memo = {
        1: [new TreeNode()],
    };
    
    const dp = (m) => {
        if (memo[m]) {
            return memo[m];
        }
        
        for (let i = 1; i < m; i += 2) {
            const left = dp(i);
            
            left.forEach(leftChild => {
                const right = dp(m - i - 1);
                
                right.forEach(rightChild => {
                    if (!memo[m]) {
                        memo[m] = [];
                    }
                    
                    memo[m].push(new TreeNode(0, leftChild, rightChild));
                });
            });
        }

        return memo[m];
    }
    

    return dp(n);
};
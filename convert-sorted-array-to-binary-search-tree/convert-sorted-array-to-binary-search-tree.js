/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    return fn(0, nums.length - 1);
    
    function fn(start, end) {
        if (start > end) return null;
        if (start === end) return new TreeNode(nums[start]);
        
        const headIndex = start + Math.floor((end - start) / 2);
        const node = new TreeNode(nums[headIndex]);
        
        node.left = fn(start, headIndex - 1);
        node.right = fn(headIndex + 1, end);
        
        return node;
    }
};
/**
 * 二叉树的后序遍历
 * 
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root, nums = []) {
    if (!root) return [];
    postorderTraversal(root.left, nums)
    postorderTraversal(root.right, nums)
    nums.push(root.val)
    return nums;
};
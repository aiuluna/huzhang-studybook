/**
 * https://leetcode-cn.com/problems/path-sum/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function (root, targetSum) {
//     if (!root) return false;
//     const arr = []

//     var getPath = function (root, prev = 0, arr) {
//         if (!root) return;
//         const current = prev + root.val;
//         if (!root.left && !root.right) {
//             arr.push(current)
//             return
//         }
//         getPath(root.left, current, arr)
//         getPath(root.right, current, arr)
//     }
//     getPath(root, 0, arr)
//     return arr.includes(targetSum)
// };


var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) return root.val === targetSum;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}

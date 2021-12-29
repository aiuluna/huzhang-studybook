/**
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthLargest = function (root, k) {
//     if (!root) return null;
//     const arr = [];
//     _preTree(root, arr);
//     return arr[k - 1]
// };

// var _preTree = function (root, arr) {
//     if (!root) return;
//     _preTree(root.right, arr);
//     arr.push(root.val)
//     _preTree(root.left, arr);
// }

var kthLargest = function (root, k) {
    if (!root) return null;
    let ans = null;
    dfs(root)
    function dfs(root) {
        if (!root) return;
        dfs(root.right);
        if (k === 1) ans = root.val;
        k--;
        if (k === 0) return;
        dfs(root.left)
    }
    return ans;
}
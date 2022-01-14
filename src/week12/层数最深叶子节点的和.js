/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 var deepestLeavesSum = function (root) {
    let max = 0, ans = 0;
    var depthRoot = function (root, depth) {
        if (!root) return;
        depthRoot(root.left, depth + 1)
        depthRoot(root.right, depth + 1)
        if (depth === max) {
            ans += root.val
        } else if (depth > max) {
            max = depth;
            ans = root.val;
        }
    }
    depthRoot(root, 0)
    return ans;
};


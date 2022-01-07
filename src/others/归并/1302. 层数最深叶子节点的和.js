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
    let max = 0, maxVal = 0;

    var _deepestLeavesSum = function (root, depth) {
        if (!root) return;
        if (depth === max) {
            maxVal += root.val
        } else if (depth > max) {
            max = depth;
            maxVal = root.val
        }

        _deepestLeavesSum(root.left, depth + 1)
        _deepestLeavesSum(root.right, depth + 1)
    }

    _deepestLeavesSum(root, 0)
    return maxVal
};



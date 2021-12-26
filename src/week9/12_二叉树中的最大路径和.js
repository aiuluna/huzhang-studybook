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
 var maxPathSum = function (root) {
    let res = -Infinity;

    var _maxPathSum = function (root) {
        if (!root) return -Infinity;
        const leftVal = _maxPathSum(root.left)
        const rightVal = _maxPathSum(root.right)
        const max = Math.max(root.val, root.val + leftVal, root.val + rightVal);
        res = Math.max(res, leftVal, rightVal, max, root.val + leftVal + rightVal)

        return max
    }
    _maxPathSum(root)
    return res;
};


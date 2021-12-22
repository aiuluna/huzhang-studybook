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
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if(!root) return true;

    if (root.val >= max || root.val <= min) {
        return false;
    }

    const leftVaildBST = isValidBST(root.left, min, root.val)
    const rightVaildBST = isValidBST(root.right, root.val, max)

    return leftVaildBST && rightVaildBST
};

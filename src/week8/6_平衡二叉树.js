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
// var isBalanced = function(root) {
//     if (!root) return true;
    
//     return (Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1) && isBalanced(root.left) && isBalanced(root.right)
// };

// function getHeight (root) {
//     if (!root) return 0;
//     return Math.max(getHeight(root.left) , getHeight(root.right)) + 1;
// }


var isBalanced = function(root) {
    return getHeight(root) > -1;
}

var getHeight = function(root) {
    if (!root) return 0;

    const leftH = getHeight(root.left);
    const rightH = getHeight(root.right);

    if (leftH === -1 || rightH === -1 || Math.abs(leftH - rightH) > 1) {
        return -1
    }
    return Math.max(leftH, rightH) + 1;
}

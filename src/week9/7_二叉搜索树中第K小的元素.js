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
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function (root, k) {
//     const arr = [];
//     _kthSmallest(root, arr)
//     return arr[k-1]
// };

// var _kthSmallest = function (root, arr) {
//     if (!root) return;
//     _kthSmallest(root.left, arr)
//     arr.push(root.val)
//     _kthSmallest(root.right, arr)
// }

var kthSmallest = function (root, k) {
    const stack = []
    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        const top = stack.pop();
        k--;
        if (k === 0) {
            return top.val
        }
        root = top.right;
    }
}


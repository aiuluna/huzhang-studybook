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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return []
    const res = [];
    const queue = [root];
    while (queue.length) {
        const len = queue.length;
        const arr = [];
        for (let i = 0; i < len; i++) {
            const top = queue.shift();
            if (top.left) queue.push(top.left);
            if (top.right) queue.push(top.right);
            arr.push(top.val);
        }
        res.unshift(arr);
    }
    return res
};

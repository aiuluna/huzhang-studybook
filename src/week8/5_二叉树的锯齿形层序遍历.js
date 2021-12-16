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
// var zigzagLevelOrder = function (root) {
//     if (!root) return [];
//     const res = [];
//     const queue = [root];
//     let flag = true;
//     while (queue.length) {
//         const arr = [];
//         const length = queue.length;
//         for (let i = 0; i < length; i++) {
//             const top = queue.shift();
//             if (top.left) queue.push(top.left);
//             if (top.right) queue.push(top.right);
//             if (flag) {
//                 arr.push(top.val);
//             } else {
//                 arr.unshift(top.val);
//             }
//         }
//         flag = !flag;
//         res.push(arr)
//     }
//     return res;
// };

var zigzagLevelOrder = function (root) {
    if (!root) return [];
    const res = [];
    _zigzagLevelOrder(root, 0)

    function _zigzagLevelOrder(node, idx) {
        if (!node) return;
        res[idx] ? res[idx].push(node.val) : (res[idx] = [node.val]);
        _zigzagLevelOrder(node.left, idx + 1);
        _zigzagLevelOrder(node.right, idx + 1)
    }
    
    for (let i = 1; i < res.length; i += 2) {
        res[i] = res[i].reverse();
    }
    return res
}

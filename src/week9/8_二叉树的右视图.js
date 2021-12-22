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
 * @return {number[]}
 */
// var rightSideView = function (root) {
//     const queue = [];
//     const ans = [];
//     if (root) {
//         queue.push([root, 0])
//     }
//     while (queue.length) {
//         const top = queue.shift();
//         top[0].left && queue.push([top[0].left, top[1] + 1]);
//         top[0].right && queue.push([top[0].right, top[1] + 1]);
//         if (!queue.length || queue[0][1] > top[1]) ans.push(top[0].val)
//     }
//     return ans;
// };

var rightSideView = function (root) {
    if (!root) return []

    const stack = [[root, 0]];
    const ans = [];

    while (stack.length) {
        const [top, dep] = stack.pop();

        if (!ans[dep] && ans[dep] !== 0) {
            ans[dep] = top.val
        }

        if (top.left) stack.push([top.left, dep + 1])
        if (top.right) stack.push([top.right, dep + 1])
    }
    return ans
}

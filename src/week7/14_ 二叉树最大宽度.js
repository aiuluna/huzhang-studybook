/**
 * https://leetcode-cn.com/problems/maximum-width-of-binary-tree/
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

 function PNI(node, position) {
    this.node = node;
    this.position = position;
}

var widthOfBinaryTree = function (root) {
    if (!root) return 0;
    // 定义一个队列，每一行放入队列
    const queue = [];
    // 初始化第一行
    queue.push(new PNI(root, 0));
    let max = 0;
    // 每次只遍历当前队列长度
    while (queue.length) {
        let l = r = queue[0].position;
        for (let i = queue.length; i > 0; i--) {
            const q = queue.shift();
            const { node, position } = q;
            r = position;
            if (node.left) {
                queue.push(new PNI(node.left, 2 * (position - l)));
            }
            if (node.right) {
                queue.push(new PNI(node.right, 2 * (position - l) + 1));
            }
        }
        max = Math.max(max, r - l + 1);
    }
    return max;
}
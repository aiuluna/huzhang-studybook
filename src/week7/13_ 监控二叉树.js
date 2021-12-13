/**
 * https://leetcode-cn.com/problems/binary-tree-cameras/
 * 
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
 var minCameraCover = function (root) {
    let res = 0;

    // 0 有摄像头
    // 1 无摄像头有覆盖
    // 2 无摄像头无覆盖

    function dps(root) {
        if (!root) return 1;

        const left = dps(root.left);
        const right = dps(root.right);

        if (left === 2 || right === 2) {
            res++;
            return 0
        }
        if (left === 0 || right === 0) {
            return 1
        }
        if (left === 1 && right === 1) {
            return 2
        }

    }
    const head = dps(root)
    if (head === 2) res++;
    return res
};


/**
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//     if (!root) return [];
//     const ans = [];
//     const queue = [root];
//     while(queue.length) {
//         const cur = [];
//         let len = queue.length;
//         for (let i = 0; i < len; i++){
//             const top = queue.shift();
//             cur.push(top.val);
//             if (top.left) queue.push(top.left);
//             if (top.right) queue.push(top.right);
//         }
//         ans.push(cur)
//     }
//     return ans;
// };

var levelOrder = function (root, res = [], i = 0) {
    if (!root) return [];

    const val = root.val;

    levelOrder(root.left, res, i + 1)
    levelOrder(root.right, res, i + 1)
    !res[i] ? (res[i] = [val]) : res[i].push(val);
    
    return res;

}

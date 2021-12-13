/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }


1. 数学归纳法 -> 结构归纳法
2. 赋予递归函数一个明确的意义
3. 思考边界条件
4. 实现递归过程


- k0是正确的
- 假设ki -> ki+1
- k0 -> k1 -> ... kn-1 -> kn
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 var preorder = function(root, arr) {
    if (!root) return;
    arr.push(root.val)
    preorder(root.left, arr)
    preorder(root.right, arr)
}

var preorderTraversal = function(root) {
    var arr = []
    preorder(root, arr);
    return arr;
};
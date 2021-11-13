/**
 * 二叉树的前序遍历
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
 */
const { convertBinaryTree } = require('../utils/tree')

function preorderTraversal(root) {
    if (!root) return [];    
    const result = [];
    result.push(root.val);
    result.push(...preorderTraversal(root.left))
    result.push(...preorderTraversal(root.right))
    return result;
}

const root = convertBinaryTree([1, null, 2, 3])
const result = preorderTraversal(root)
console.log(result)

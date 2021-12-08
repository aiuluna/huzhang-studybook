/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    const root = new TreeNode(preorder[0]);

    let inorder_root_idx = 0;
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === root.val) {
            inorder_root_idx = i;
            break;
        }
    }
    const left_preorder = preorder.slice(1, inorder_root_idx + 1);
    const letf_inorder = inorder.slice(0, inorder_root_idx);
    const right_preorder = preorder.slice(inorder_root_idx + 1);
    const right_inorder = inorder.slice(inorder_root_idx + 1);
    root.left = buildTree(left_preorder, letf_inorder);
    root.right = buildTree(right_preorder, right_inorder);
    return root;
};

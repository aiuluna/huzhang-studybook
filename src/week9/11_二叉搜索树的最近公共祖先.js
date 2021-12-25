/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    if (p.val > q.val) {
        let temp = q;
        q = p;
        p = temp;
    }
    if (!root) return null;
    if (root.val >= p.val && root.val <= q.val) {
        return root
    }
    return lowestCommonAncestor(root.val >= p.val ? root.left : root.right, p, q)
};

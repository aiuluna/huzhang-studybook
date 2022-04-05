/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
  return height(root) >= 0
};

var height = function(root) {
  if (!root) return 0;
  const leftH = height(root.left);
  const rightH = height(root.right);

  if (leftH === -1 || rightH === -1 || Math.abs(leftH - rightH) > 1) return -1;
  return Math.max(leftH, rightH) + 1;
}

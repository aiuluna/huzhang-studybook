/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function (root, k) {
  let res = null;
  function dfs(root) {
      if (!root) return;
      dfs(root.right);
      if (k === 1) res = root.val;
      k--;
      dfs(root.left);
  }
  dfs(root);
  return res;
};
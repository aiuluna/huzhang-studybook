/**
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
 var levelOrder = function (root) {
  const res = [];

  const dfs = function (root, dep) {
      if (!root) return;
      if (!res[dep]) res[dep] = [];
      res[dep].push(root.val);
      dfs(root.left, dep + 1);
      dfs(root.right, dep + 1);
  }

  dfs(root, 0);
  return res;
};
/**
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
 var findBottomLeftValue = function (root) {
  let depth = -1, val = 0;
  var dfs = function (root, d) {
      if (!root) return;
      if (d > depth) {
          val = root.val;
          depth = d;
      }
      dfs(root.left, d + 1);
      dfs(root.right, d + 1);
  }
  dfs(root, 0);
  return val;
};


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
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function (root, target) {
  let res = [];
  const dfs = function (root, target, arr) {
      if (!root) return;
      target -= root.val;
      arr.push(root.val);
      if (target === 0 && !root.left && !root.right) {
          res.push([...arr])
      }
      dfs(root.left, target, arr);
      dfs(root.right, target, arr);
      arr.pop();
  }
  dfs(root, target, [])
  return res;
};
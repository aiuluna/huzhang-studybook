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
 var levelOrder = function(root, i = 0, res = []) {
  if (!root) return [];

  levelOrder(root.left, i + 1, res);
  levelOrder(root.right, i + 1, res);
  
  if (!res[i]) res[i] = [];
  if (i % 2 === 0) {
      res[i].push(root.val)
  } else {
      res[i].unshift(root.val)
  }
  return res;

};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var levelOrder = function(root) {
  if (!root) return [];

  const queue = [];
  const res = [];
  queue.push(root)
  while(queue.length) {
      const top = queue.shift();
      res.push(top.val);
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);
  } 
  return res;
};
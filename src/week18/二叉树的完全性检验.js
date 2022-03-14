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
 * @return {boolean}
 */
 var isCompleteTree = function (root) {
  if (!root) return false;
  let size = 0;
  let lastIdx = 0;
  var dfs = function (node, n) {
      if (!node) return;
      size++;
      lastIdx = Math.max(n, lastIdx);
      dfs(node.left, 2 * n);
      dfs(node.right, 2 * n + 1);
  }
  
  dfs(root, 1);
  return size === lastIdx;

};


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
 * @return {boolean}
 */
 var isCompleteTree = function (root) {
  if (!root) return true;
  const n = nodeCount(root);
  let m = 1, cnt = 1;
  while (2 * m + cnt <= n) {
      m *= 2;
      cnt += m;
  }
  return isTreeNodeSample(root, n, m)

};

var nodeCount = function (root) {
  if (!root) return 0;
  return nodeCount(root.left) + nodeCount(root.right) + 1;
}

var isTreeNodeSample = function (root, n, m) {
  if (!root) return n === 0;
  if (n === 0) return false;
  if (n === 1) return !root.left && !root.right;

  const k = 2 * m - 1;
  const l = Math.min(m, n - k);
  const r = n - k - l;
  // console.log(n, m, k, l, r)
  return isTreeNodeSample(root.left, (k - 1) / 2 + l, m / 2) && isTreeNodeSample(root.right, (k - 1) / 2 + r, m / 2);

}




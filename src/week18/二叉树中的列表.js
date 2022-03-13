/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSubPath = function (head, root) {
  if (!head) return true;
  if (!root) return false;

  if (head.val === root.val && dfs(root, head)) return true;
  return isSubPath(head, root.left) || isSubPath(head, root.right)
};


var dfs = function (treeNode, linkNode) {
  if (!linkNode) return true;
  if (!treeNode) return false;

  if (treeNode.val === linkNode.val) {
      return dfs(treeNode.left, linkNode.next) || dfs(treeNode.right, linkNode.next);
  }
  return false
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
 var pathSum = function (root, sum) {
    let ans = 0;
    if (!root) return ans;

    var drive = function (root, target) {
        if (!root) return;
        if (root.val === target) ans++;
        target -= root.val;
        drive(root.left, target);
        drive(root.right, target);
    }

    var findStart = function(root) {
        if (!root) return;
        drive(root, sum);
        findStart(root.left, sum);
        findStart(root.right, sum);
    }

    findStart(root)
    return ans;
};

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
 var distributeCoins = function (root) {
    let ans = 0;
    var dfs = function (root) {
        if (!root) return 0;
        const x = dfs(root.left);
        const y = dfs(root.right);
        ans+= Math.abs(x) + Math.abs(y);
        return root.val + x + y - 1;
    }
    dfs(root)
    return ans;
};


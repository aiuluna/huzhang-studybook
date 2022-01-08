/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function (n) {
    return _generateTrees(1, n)
};

var _generateTrees = function (l, r) {
    if (l > r) return [null]
    const ans = [];
    for (let i = l; i <= r; i++) {
        const lefts = _generateTrees(l, i - 1);
        const rights = _generateTrees(i + 1, r);
        for (let x of lefts) {
            for (let y of rights) {
                const root = new TreeNode(i)
                root.left = x;
                root.right = y;
                ans.push(root)
            }
        }
    }

    return ans;
}
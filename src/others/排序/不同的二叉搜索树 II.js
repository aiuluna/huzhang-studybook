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
    if (n === 0) return [];
    // if (n === 1) return [[1]];
    return _generateTrees(1, n);

};

var _generateTrees = function (start, end) {
    if (start > end) return [null];
    let ans = []

    for (let i = start; i <= end; i++) {
        let leftTrees = _generateTrees(start, i - 1);
        let rightTrees = _generateTrees(i + 1, end);


        for (left of leftTrees) {
            for (right of rightTrees) {
                const root = new TreeNode(i);
                root.left = left;
                root.right = right;
                ans.push(root)
            }
        }

    }
    return ans;

}
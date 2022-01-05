/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
    const arr1 = [], arr2 = []
    midPat(root1, arr1)
    midPat(root2, arr2)
    const len1 = arr1.length, len2 = arr2.length, res = [];
    let p = 0, q = 0;
    while(p < len1 || q < len2) {
        if (q >= len2 || (p < len1 && arr1[p] <= arr2[q])) {
            res.push(arr1[p++])
        } else {
            res.push(arr2[q++])
        }
    }
    return res
};

var midPat = function(root, arr) {
    if (!root) return;
    midPat(root.left, arr)
    arr.push(root.val)
    midPat(root.right, arr)
}
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
 var getAllElements = function (root1, root2) {
    const res = [], arr1 = [], arr2 = [];
    midSort(root1, arr1);
    midSort(root2, arr2);

    while (arr1.length || arr2.length) {
        if (!arr2.length || (arr1.length && arr1[0] <= arr2[0])) {
            res.push(arr1.shift())
        } else {
            res.push(arr2.shift())
        }
    }
    return res;
};

var midSort = function (root, arr) {
    if (!root) return;
    midSort(root.left, arr);
    arr.push(root.val);
    midSort(root.right, arr);
}
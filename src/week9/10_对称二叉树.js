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
// var isSymmetric = function (root) {
//     if (!root) return true;
//     const revertLeft = revert(root.left)
//     return isSame(revertLeft, root.right)
// };

// var isSame = function (A, B) {
//     if (!A && !B) return true;
//     if (!A && B) return false;
//     if (A && !B) return false;
//     return (A.val === B.val) && isSame(A.left, B.left) && isSame(A.right, B.right)
// }

// var revert = function (root) {
//     if (!root) return null;

//     const temp = root.left;
//     root.left = revert(root.right);
//     root.right = revert(temp);

//     return root
// }


// var isSymmetric = function (root) {
//     if (!root) return true
//    return _isSymmetric(root.left, root.right)
// }

// var _isSymmetric = function(a, b) {
//     if (!a && !b) return true;
//     if (!a || !b) return false;

//     return a.val === b.val && _isSymmetric(a.left, b.right) && _isSymmetric(a.right, b.left)
// }

var isSymmetric = function (root) {
    if (!root) return true;
    const queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length) {
        const topL = queue.shift();
        const topR = queue.shift();

        if (!topL && !topR) continue;
        if (!topL || !topR) return false;
        if (topL.val !== topR.val) return false;
        queue.push(topL.left);
        queue.push(topR.right);

        queue.push(topL.right);
        queue.push(topR.left);
    }
    return true
}
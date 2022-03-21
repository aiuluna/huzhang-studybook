/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (!B || !A) return false;
    
    return isSubTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

var isSubTree = function(A, B) {
    if (!A) return false;
    if (!B) return true;

    return (A.val === B.val) && isSubTree(A.left, B.left) && isSubTree(A.right, B.right)
}

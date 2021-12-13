/**
 * https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
 * 
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
 // 求是否是子树
 const isSubStructure = function(A, B) {
    if (!B || !A) return false;
    if (B.val === A.val && is_Match(A,B)) return true;   
    return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

// 求是否节点匹配
const is_Match = (A, B) => {
    if (!B) return true;
    if (!A) return false;
    if (B.val !== A.val) return false;
    return is_Match(A.left, B.left) && is_Match(A.right, B.right);
}
/**
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    const arr = [];
    const stack = [root];
    while(stack.length) {
        const top = stack.pop();
        if (top.children) {
            top.children.reverse().forEach(item => {
                stack.push(item)
            })            
        }
        arr.push(top.val)
    }
    return arr;
};

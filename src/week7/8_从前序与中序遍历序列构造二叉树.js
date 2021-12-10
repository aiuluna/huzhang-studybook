/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function (preorder, inorder) {
//     if (preorder.length === 0) {
//         return null;
//     }
//     const root = new TreeNode(preorder[0]);

//     let inorder_root_idx = 0;
//     for (let i = 0; i < inorder.length; i++) {
//         if (inorder[i] === root.val) {
//             inorder_root_idx = i;
//             break;
//         }
//     }
//     const left_preorder = preorder.slice(1, inorder_root_idx + 1);
//     const letf_inorder = inorder.slice(0, inorder_root_idx);
//     const right_preorder = preorder.slice(inorder_root_idx + 1);
//     const right_inorder = inorder.slice(inorder_root_idx + 1);
//     root.left = buildTree(left_preorder, letf_inorder);
//     root.right = buildTree(right_preorder, right_inorder);
//     return root;
// };

// var buildTree = function (preorder, inorder) {
//     if (!preorder.length) return null;
//     const map = new Map();
//     const n = inorder.length;
//     for (let i = 0; i < inorder.length; i++) {
//         map.set(inorder[i], i)
//     }

//     var _buildTree = function (preorder_start, preorder_end, inorder_start, inorder_end) {
//         if (preorder_start > preorder_end || inorder_start > inorder_end) return null;
//         const rootVal = preorder[preorder_start];
//         const node = new TreeNode(rootVal);
//         const ind = map.get(rootVal);

//         const left_preorder_start = preorder_start + 1;
//         const left_preorder_end = preorder_start + ind - inorder_start;
//         const left_inorder_start = inorder_start;
//         const left_inorder_end = ind - 1;

//         const right_preorder_start = left_preorder_end + 1;
//         const right_preorder_end = preorder_end;
//         const right_inorder_start = ind + 1;
//         const right_inorder_end = inorder_end;

//         node.left = _buildTree(left_preorder_start, left_preorder_end, left_inorder_start, left_inorder_end);
//         node.right = _buildTree(right_preorder_start, right_preorder_end, right_inorder_start, right_inorder_end);
//         return node
//     }

//     return _buildTree(0, n - 1, 0, n - 1)
// }


var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null;

    const stack = new Array();
    const root = new TreeNode(preorder[0])
    stack[0] = root;
    let pre = 1, ind = 0;
    while (pre < preorder.length) {
        // 栈顶元素
        let node = stack[stack.length - 1];
        if (node.val !== inorder[ind]) {
            node.left = new TreeNode(preorder[pre]);
            stack.push(node.left);
        } else {
            let top = stack[stack.length - 1];
            while (stack.length > 0 && stack[stack.length - 1].val === inorder[ind]) {
                top = stack.pop();
                ind++;
            }
            top.right = new TreeNode(preorder[pre]);
            stack.push(top.right)
        }
        pre++;
    }
    return root;
}

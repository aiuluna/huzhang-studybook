/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 var distanceK = function (root, target, k) {
    const ans = [];
    const parentMap = new Map();
    // 将所有父节点放到map里
    var findParents = function (root) {
        if (root.left) {
            parentMap.set(root.left.val, root)
            findParents(root.left)
        }
        if (root.right) {
            parentMap.set(root.right.val, root)
            findParents(root.right)
        }
    }
    findParents(root)

    //查找从target开始，距离target为k的节点值
    var findTargets = function (root, k, from) {
        if (k === 0) {
            ans.push(root.val)
        }
        if (root.left && from !== root.left.val) {
            findTargets(root.left, k - 1, root.val)
        }
        if (root.right && from !== root.right.val) {
            findTargets(root.right, k - 1, root.val)
        }
        if (parentMap.get(root.val) && from !== parentMap.get(root.val).val) {
            findTargets(parentMap.get(root.val), k - 1, root.val)
        }
    }
    findTargets(target, k, null)

    return ans
};


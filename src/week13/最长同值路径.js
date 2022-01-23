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
 * @return {number}
 */
 var longestUnivaluePath = function (root) {
    if (!root) return 0;
    let max = -Infinity;
    var count = function (root, val) {
        if (!root || root.val !== val) return 0;
        const left = count(root.left, val);
        const right = count(root.right, val);
        max = Math.max(left + right + 1, max);
        return Math.max(left, right) + 1;
    }

    const queue = [];
    queue.push(root);
    while (queue.length) {
        const top = queue.shift();
        if (top.left) {
            queue.push(top.left)
        }
        if (top.right) {
            queue.push(top.right)
        }
        Math.max(max, count(top, top.val));
    }

    return max - 1;
};



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
 * @return {number}
 */
 var longestUnivaluePath = function (root) {
    if (!root) return 0;
    let max = -Infinity;
    var count = function (root, val) {
        if (!root || root.val !== val) return 0;
        const left = count(root.left, val);
        const right = count(root.right, val);
        max = Math.max(left + right + 1, max);
        return Math.max(left, right) + 1;
    }

    const queue = [];
    queue.push(root);
    while (queue.length) {
        const top = queue.shift();
        if (top.left) {
            queue.push(top.left)
        }
        if (top.right) {
            queue.push(top.right)
        }
        Math.max(max, count(top, top.val));
    }

    return max - 1;
};



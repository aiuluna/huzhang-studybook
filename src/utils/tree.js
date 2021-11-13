function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}

// 将数组转化为二叉树
function convertBinaryTree(arr) {
    let root;

    let insertNode = function(parentNode, childNode) {
        if (!childNode || !childNode.val) return;
        if (childNode.val < parentNode.val) {
            if (!parentNode.left) parentNode.left = childNode;
            else insertNode(parentNode.left, childNode)
        } else {
            if (!parentNode.right) parentNode.right = childNode;
            else insertNode(parentNode.right, childNode)
        }
    }

    for (let val of arr) {
        let node = new TreeNode(val, null, null);
        if (root) insertNode(root, node);
        else root = node;
    }

    return root;
}

module.exports = {TreeNode, convertBinaryTree};

const arr = [3,9,20,null,null,15,7];
const arr2 = [1,2,2,3,3,null,null,4,4]

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const buildTree = (arr, index = 0) => {
    if (index >= arr.length || arr[index] === null) return null;

    const root = new TreeNode(arr[index]);
    root.left = buildTree(arr, 2 * index + 1);
    root.right = buildTree(arr, 2 * index + 2);

    return root;
}

const root = buildTree(arr);
const root2 = buildTree(arr2);

var isBalanced = function(root) {
    function dfs(node) {
        if (!node) return 0;

        let left = dfs(node.left);
        if (left === -1) return - 1;

        let right = dfs(node.right);
        if (right === -1) return - 1;

        if (Math.abs(left - right) > 1) return -1

        return Math.max(left, right) + 1;
    }

    return dfs(root) !== -1;
};
const arr = [3,9,20,null,null,15,7];

const arr2 = [1, 2, 3, 4, 5, null, null]

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

const root = buildTree(arr2);

function maxDepth(root) {
    if (!root) return 0;

    const leftHeight = maxDepth(root.left);
    const rightHeight = maxDepth(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

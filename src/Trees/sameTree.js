const arr = [4,2,7,1,3,6,9];

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

const isSameTree = (p, q) => {
    if (!p && !q) return true;

    if (!p || !q || p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
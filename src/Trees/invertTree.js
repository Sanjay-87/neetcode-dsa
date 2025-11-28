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

function invertTree(root) {
    if (root === null) return null;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
}

console.log(invertTree(root))
const arr = [1,2,3,4,5];

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


const diameterOfBinaryTree = (root) => {
    let diameter = 0;

    function dfs(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1;
    };

    dfs(root);
    return diameter;
}

console.log(diameterOfBinaryTree(root))
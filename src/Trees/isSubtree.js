const isSubtree = (root, subroot) => {
    function isSameTree(a, b) {
        if (!a && !b) return true;
        if (!a || !b || a.val !== b.val) return false;

        return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
    }

    if (!root) return false;

    if (isSameTree(root, subroot)) return true;

    return isSubtree(root.left, subroot) || isSubtree(root.right, subroot);
}
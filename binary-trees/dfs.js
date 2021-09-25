class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

dfs = (root) => {
    if (!root) {
        return 0;
    }

    return 1 + Math.max(dfs(root.left), dfs(root.right));
}

let root = new Node(5);
root.right = new Node(8);
root.right.right = new Node(9);
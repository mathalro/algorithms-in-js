class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

bfs = (root) => {
    if (!root) {
        return [];
    }

    let queue = [];
    let response = [];
    queue.push({
        node: root,
        level: 0
    });

    let currentLevel = 0;
    let levelElements = [];

    while (queue.length) {    
        let front = queue.shift();
        let level = front.level;
        let node = front.node;
        
        if (currentLevel !== level) {
            response.push(levelElements);
            levelElements = [];
            currentLevel++;
        }
        
        levelElements.push(node.val);

        if (node.left) {
            queue.push({
                node: node.left,
                level: currentLevel + 1
            });
        }

        if (node.right) {
            queue.push({
                node: node.right,
                level: currentLevel + 1
            });
        }
    }

    if (levelElements.length) {
        response.push(levelElements);
    }

    return response;
}

let root = new Node(3);
root.right = new Node(9);
root.left = new Node(20);
root.right.right = new Node(9);
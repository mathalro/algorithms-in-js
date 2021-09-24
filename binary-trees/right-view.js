class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let maxLevel = 0;

rightView = (root, level, map) => {
   if (!root) {
       return;
   }

   if (!map[level]) {
       map[level] = root.val;
       maxLevel = level;
   }

   rightView(root.right, level + 1, map);
   rightView(root.left, level + 1, map);
}

var rightSideView = solution = (root) => {
   let map = {};
   rightView(root, 0, map);
   let response = [];
   
   for (let i = 0; i <= maxLevel; i++) {
       if (map[i] != undefined) {
           response.push(map[i]);   
       }
   }

   return response;
}

let root = new Node(1);
root.right = new Node(3);
root.left = new Node();
root.right.right = new Node(6);
root.left.right = new Node(5);
root.left.left = new Node(4);
root.left.left.right = new Node(7);

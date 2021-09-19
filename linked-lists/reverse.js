class Node {
    value;
    next;

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

iterateLinkedList = (head) => {
    let currentNode = head;

    while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
}

reverseLinkedList = (head) => {
    let currentNode = head;
    let previousNode = null;

    while (currentNode) {
        console.log(currentNode.value);
        let reverseNode = currentNode;
        currentNode = currentNode.next;
        reverseNode.next = previousNode;
    }

    return previousNode;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

let reverse = reverseLinkedList(head);
iterateLinkedList(reverse);
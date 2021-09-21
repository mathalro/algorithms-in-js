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

    return null;
}

reverseLinkedList = (head) => {
    let currentNode = head;
    let prev = null;

    while (currentNode) {
        let next = currentNode.next;
        currentNode.next = prev;

        prev = currentNode;
        currentNode = next;
    }

    return prev;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

let reverse = reverseLinkedList(head);
iterateLinkedList(reverse);
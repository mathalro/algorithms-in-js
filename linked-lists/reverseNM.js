class Node {
    value;
    next;

    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

iterateLinkedList = (head) => {
    let current = head;

    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

reverseMid = (head, m, n) => {
    if (head === null) {
        return head;
    }

    let current = head;
    let first = head;
    let prev = null;

    while (current && m <= n) {
        let next = current.next;
        current.next = prev;

        prev = current;
        current = next;
        m++;
    }

    first.next = current;
    return prev;
}

reverseNM = (head, m, n) => {
    if (head === null) {
        return head;
    }

    let count = 1;
    let current = head;
    let prev = null;

    while (count < m) {
        prev = current;
        current = current.next;
        count++;
    }

    if (m === 1) {
        return reverseMid(current, m, n);
    } else {
        prev.next = reverseMid(current, m, n);
        return head;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
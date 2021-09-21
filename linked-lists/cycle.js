class Node {
    value;
    next;

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

cycle = (head) => {
    let slow = head, fast = head;

    while (slow && fast && slow != fast) {
        console.log("SLOW: ", slow);
        console.log("FAST: ", fast);
        slow = slow.next;
        fast = fast.next;

        if (!fast) {
            break;
        }

        fast = fast.next;
    }

    if (slow === fast) {
        let init = head, end = slow;

        while (init != end) {
            init = init.next;
            end = end.next;
        }

        return init.value;
    }

    return -1;
}

let head = new Node(3);
head.next = new Node(2);
head.next.next = new Node(0);
head.next.next.next = new Node(-4);
head.next.next.next.next = head.next;
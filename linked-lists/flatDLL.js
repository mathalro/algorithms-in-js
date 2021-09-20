class Node {
    value;
    prev;
    next;
    child;

    constructor (value) {
        this.value = value;
        this.prev = null;
        this.next = null;
        this.child = null;
    }
}

iterateDLL = (head) => {
    let current = head;

    while (current) {
        console.log(current.value);
        current = current.next;
    }
} 

flatDLL = (head) => {
    let current = head;

    while (current) { 
        if (current.child !== null) {
            // flat the child here
            let child = flatDLL(current.child);
            let next = current.next;

            current.next = child;
            child.prev = current;

            let currentChild = child;

            while (currentChild.next) {
                currentChild = currentChild.next;
            }

            currentChild.next = next;
            if (next) {
                next.prev = currentChild;
            }

            current.child = null;
            current = next;
        } else {
            current = current.next;
        }
    }

    return head;
}

flatDLLOptimized = (head) => {
    let current = head;
    let tail = null;

    while (current) {
        tail = current;
        if (current.child !== null) {
            // flat the child here
            let [child, childTail] = flatDLLOptimized(current.child);
            let next = current.next;
            
            current.next = child;
            child.prev = current;
            childTail.next = next;
            
            if (next) {
                next.prev = childTail;
            }
            
            current.child = null;
            current = childTail;
        } else {
            current = current.next;
        }
    }

    return [head, tail];
}

// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);

// let head2 = new Node(5);
// head2.next = new Node(6);
// head2.next.next = new Node(7);

// let head3 = new Node(8);
// head3.next = new Node(9);

// head.next.next.child = head2;
// head2.next.child = head3;

let head = new Node(1);
let head2 = new Node(2);
let head3 = new Node(3);

head.child = head2;
head2.child = head3;
class Queue {
    stack = [];

    enqueue = (val) => {
        this.stack.push(val);
    }

    dequeue = () => {
        this.stack.shift();
    }

    peek = () => {
        if (this.stack.length) {
            return stack[0];
        } else {
            return null;
        }
    }

    empty = () => {
        return this.stack.length === 0;
    }
}
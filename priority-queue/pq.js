swap = (array, i, j) => {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

class PriorityQueue {
    constructor () {
        this.queue = [];
    }

    enqueue = (val) => {
        this.queue.push(val);
        let pos = this.queue.length - 1;

        let valid = false;
        while (!valid && pos > 0) {
            let parent = Math.floor((pos-1)/2);
            if (this.queue[parent] < this.queue[pos]) {
                swap(this.queue, parent, pos);
            } else {
                valid = true;
            }

            pos = parent;
        }
    }

    dequeue = () => {
        if (!this.queue.length) {
            return null;
        }

        if (this.queue.length > 1) {
            swap(this.queue, 0, this.queue.length-1);
        }

        let val = this.queue.pop();

        console.log(this.queue);

        let pos = 0;

        while ((2*pos + 1) < this.queue.length) {
            let left = this.queue[2*pos + 1];
            let right = this.queue.length > (2*pos + 2) ? this.queue[2*pos + 2] : null;
            
            if (!right || left > right) {
                swap(this.queue, pos, left);
                pos = left;
            } else {
                swap(this.queue, pos, right);
                pos = right;
            }
        }

        return val;
    }
}
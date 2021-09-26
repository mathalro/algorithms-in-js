swap = (array, i, j) => {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

class PriorityQueue {
    queue;

    constructor () {
        this.queue = [];
    }

    enqueue = (val) => {
        let pos = 0;
        while (this.queue[pos]) {
            pos *= 2;
        }

        this.queue[pos] = val;
        let valid = false;
        while (!valid && pos > 0) {
            let parent = Math.floor((pos-1)/2);
            if (this.queue[parent] < this.queue[pos]) {
                swap(array, parent, pos);
            } else {
                valid = true;
            }

            pos = parent;
        }
    }
}
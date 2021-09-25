bs = (array, init, end, n) => {
    if (init >= end) {
        if (array[init] === n) {
            return init;
        } else {
            return -1;
        }
    }

    const mid = Math.floor((init + end) / 2);
    const midValue = array[mid];

    if (midValue < n) {
        return bs(array, mid+1, end, n);
    } else if (midValue > n) {
        return bs(array, init, mid-1, n);
    } else {
        return mid;
    }
}

solution = (array, n) => {
    return bs(array, 0, array.length, n);
}
swap = (array, i, j) => {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

quickSelect = (array, init, end, k) => {
    if (init >= end) {
        return array[init];
    }


    let count = init;
    let p = end;
    for (let comparer = init; comparer != p; comparer++) {
        if (array[comparer] < array[p]) {
            swap(array, comparer, count);
            count++;
        }
    }

    swap(array, p, count);

    if (count === k) {
        return array[count];
    } else if (count < k) {
        return quickSelect(array, count+1, end, k);
    } else {
        return quickSelect(array, init, count-1, k);
    }
}

solution = (array, k) => {
    let position = array.length - k;
    return quickSelect(array, 0, array.length - 1, position);
}
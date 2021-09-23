swap = (array, i, j) => {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

quickSort = (array, init, end) => {
    if (init >= end) return;

    let p = end;
    let count = init;
    for (let comparer = init; comparer != p; comparer++) {
        if (array[p] > array[comparer]) {
            swap(array, count, comparer);
            count++;
        }
    }
    
    swap(array, count, p);

    quickSort(array, init, count-1);
    quickSort(array, count+1, end);

    return;
}
bs = (array, n, isMinimum) => {
    let left = 0;
    let right = array.length - 1;
    let value = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === n) {
            value = mid;
            if (isMinimum) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (array[mid] > n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return value;
}

solution = (array, n) => {
    let init = bs(array, n, true);
    let end = bs(array, n, false);
    return [init, end];
}
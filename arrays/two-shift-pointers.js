/***
 * Find the maximum area that can be formed between two given heights in an array of heights
 * Question: https://leetcode.com/problems/container-with-most-water/
 */

// Naive Solution - O(N^2)
findMax = (arr) => {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            max = Math.max(max, (j-i) * Math.min(arr[i], arr[j]));
        }
    }

    return max;
}

// Optimized Solution
/**
 * We want to maximize: max = (j - i) x min(arr[i], arr[j])
 * j - i is maximum when i = 0 and j = arr.length
 * min(arr[i], arr[j]) is maximized moving only the pointer whose value is lowest. 
 * If we move the biggest value, we'll be minimizing (j-i) and also min(arr[i], arr[j]).
 */
findMaxOptimal = (arr) => {
    let max = 0;
    let i = 0, j = arr.length - 1;

    while (i < j) {
        max = Math.max(max, (j - i) * Math.min(arr[i], arr[j]));

        if (arr[i] < j) {
            i++;
        } else {
            j--;
        }
    }

    return max;
} 
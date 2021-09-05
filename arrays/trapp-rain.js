// Dinamic Programing solution
trappRain = (arr) => {
    let sum = 0;
    const maxRight = new Array(arr.length), maxLeft = new Array(arr.length);

    maxRight[arr.length - 1] = 0;
    for (let i = arr.length - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i+1], arr[i+1]);
    }

    maxLeft[0] = 0;
    for (let i = 1; i < arr.length; i++) {
        maxLeft[i] = Math.max(maxLeft[i-1], arr[i-1]);
    }

    for (let i = 0; i < arr.length; i++) {
        const left = maxLeft[i], right = maxRight[i];
        const minimumWall = Math.min(left, right);
        
        sum += Math.max(0, minimumWall-arr[i]);
    }

    return sum;
}

// Optimal 
/**
 * [ 0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2 ]
 */
trappRainOptimal = (arr) => {
    let sum = 0, l = 0, r = arr.length - 1;
    let maxLeft = 0, maxRight = 0;

    while (l < r) {
        if (arr[l] < arr[r]) { // 0 < 2
            if (arr[l] < maxLeft) { // 0 < 0
                sum += maxLeft - arr[l];
            } else {
                maxLeft = arr[l];
            }
            
            l++;
        } else {
            if (arr[r] < maxRight) {
                sum += maxRight - arr[r];
            } else {
                maxRight = arr[r];
            }
            
            r--;
        }
    }

    return sum;
}
greatestSubstring = (s) => {
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let charMap = { };
        charMap[s[i]] = true;
        let count = 1;
        for (let j = i+1; j < s.length; j++) {
            let newChar = charMap[s[j]];
            if (newChar === undefined) {
                count++;
                charMap[s[j]] = true;
            } else {
                break;
            }
        }
        max = Math.max(max, count);
    }

    return max;
}

/**
 * Using sliding window to optimize the solution
 * If we find an repeated char, we can check the size of the previous window and disconsidere all the
 * chars before the first repeated char position, cause, any substring formed by a contiguous substring that includes 
 * the first repeated char and the secod repeated char will be invalid for our constraint. So, we keep a sliding window and
 * we grow the window to the right. If we find a repeated char we decrese the window in the left until the first repeated char
 * position. We repeated this process until the right side of window gets the end of string.
 * 
 * We keep the previous char positions in a hashmap - O(1).
 * We increate the right side of the window until string lenght O(n).
 * We do not iterate over the left side of the window O(1).
 *  */
greatestSubstring = (s) => {
    let max = 0, l = 0, r = 0;
    let charMap = { };

    while (r < s.length) {
        let i = charMap[s[r]];
        if (i === undefined || i < l) {
            if (r === s.length - 1) {
                let windowSize = r - l + 1;
                max = Math.max(max, windowSize);
            }

            charMap[s[r]] = r;
        } else {
            let windowSize = r - l;
            l = charMap[s[r]] + 1;
            charMap[s[r]] = r;
            max = Math.max(max, windowSize); 
        }

        r++;
    }

    return max;
}
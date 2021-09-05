// Naive
getTyped = (s) => {
    const stack = [];
    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] != '#') {
            stack.push(s[i]);
        } else {
            while (s[i] == '#' && i < s.length) {
                stack.pop();
                i++;
            }

            i--;
        }
    }

    for (let i = 0; i < stack.length; i++) {
        result += stack[i];
    }

    return result;
}

compare = (s, t) => {
    const sResult = getTyped(s);
    const tResult = getTyped(t);

    return sResult == tResult;
}

// Optimized
      i
// "aab##dc"
     j
// "adc"

compareOptimized = (s, t) => {
    let i = s.length - 1, j = t.length - 1;
    
    while (i >= 0 || j >= 0) {
        let iValue = '', jValue = '';
        let iToDelete = 0, jToDelete = 0;
        while (i >= 0 && (s[i] == '#' || iToDelete > 0)) {
            if (s[i] == '#') {
                iToDelete++;
            } else {
                iToDelete--;
            }
            i--;
        }
        if (i >= 0) {
            iValue = s[i];
        }

        while (j >= 0 && (t[j] == '#' || jToDelete > 0)) {
            if (t[j] == '#') {
                jToDelete++;
            } else {
                jToDelete--;
            }
            j--;
        }
        if (j >= 0) {
            jValue = t[j];
        }

        // console.log(`i ${i}: ` + iValue, `j ${j}: ` + jValue);

        if (iValue != jValue) {
            return false;
        }

        i--; j--;
    }

    return true;
}




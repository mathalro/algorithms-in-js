isPalindromeTwoPointersOutside = (s) => {
    s = s.replace(/[^a-z0-9]/ig, '').toLowerCase();
    let l = 0, r = s.length - 1;
    while (l <= r) {
        if (s[l] !== s[r]) {
            return false;
        }

        l++; r--;
    }

    return true;
}

isPalindromeTwoPointersCenter = (s) => {
    s = s.replace(/[^a-z0-9]/ig, '').toLowerCase();
    let l = Math.floor(s.length/2);
    let r = l;

    if (s.length%2 === 0) {
        l--;
    }

    while (l >= 0 && r <= s.length-1) {
        if (s[l] !== s[r]) {
            return false;
        }
        l--; r++;
    }
    
    return true;
}

isPalindromeReverse = (s) => {
    s = s.replace(/[^a-z0-9]/ig, '').toLowerCase();
    let r = '';

    for (let i = s.length - 1; i >= 0; i--) {
        r += s[i];
    }

    return s === r;
}
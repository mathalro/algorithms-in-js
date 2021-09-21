isPalindrome = (s, l, r) => {
    while (l <= r) {
        if (s[l] != s[r]) {
            return false;
        }
        l++; r--;
    }

    return true;
}

almostPalindrome = (s) => {
    s = s.replace(/[^a-z0-9]/ig, '').toLowerCase();
    let l = 0, r = s.length-1;
    while (l <= r) {
        if (s[l] !== s[r]) {
            return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1);
        }
        l++; r--;
    }

    return true;
}
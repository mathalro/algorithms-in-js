minimumBracketsRemove = (s) => {
    const stack = [];
    const map = {};
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];

        if (currentChar === '(') {
            let pair = {
                char: s[i],
                pos: i
            };

            stack.push(pair);
        } else if (currentChar === ')') {
            if (stack.length === 0) {
                map[[i]] = true;
            } else {
                stack.pop();
            }
        }
    }

    for (let i = 0; i < stack.length; i++) {
        map[stack[i].pos] = true;
    }

    for (let i = 0; i < s.length; i++) {
        if (!map[i]) {
            result += s[i];
        }
    }

    return result;
}
/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function (s) {
    const stack = [];

    let num = 0;
    let str = ''
    let res = '';

    let i = 0;
    while (i < s.length) {
        while (s[i].charCodeAt() >= '0'.charCodeAt() && s[i].charCodeAt() <= '9'.charCodeAt()) {
            num = 10 * num + parseInt(s[i]);
            i++;
        }
        if (num) {
            stack.push(num);
        }
        num = 0
        if (s[i] !== ']') {
            stack.push(s[i]);
            i++;
        } else {
            while (stack[stack.length - 1] !== '[') {
                str += stack.pop();
            }
            // 取出'['
            stack.pop();
            let count = stack.pop();
            str = str.repeat(count);
            let len = str.length;
            while (len--) {
                stack.push(str[len])
            }
            str = ''
            i++;
        }
    }
    while (stack.length) {
        res = stack.pop() + res;
    }

    return res;


};
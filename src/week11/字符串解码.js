/**
 * @param {string} s
 * @return {string}
 */
 function isNumber(x) {
    return x.charCodeAt() >= '0'.charCodeAt() && x.charCodeAt() <= '9'.charCodeAt()
}

var decodeString = function (s) {
    const num_stack = [], str_stack = [];
    let str = "";
    let num = 0;
    for (let data of s) {
        if (isNumber(data)) {
            num = 10 * num + parseInt(data)
        } else if (data === '[') {
            num_stack.push(num);
            num = 0;
            str_stack.push(str);
            str = "";
        } else if (data === ']') {
            const repeatTimes = num_stack.pop();
            str = str_stack.pop() + str.repeat(repeatTimes)
        } else {
            str += data;
        }
    }
    return str;
};
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function (pushed, popped) {
    const stack = [];
    while (pushed.length) {
        if (pushed[0] === popped[0]) {
            pushed.shift()
            popped.shift()
        } else if (stack[stack.length - 1] === popped[0]) {
            stack.pop()
            popped.shift()
        } else {
            stack.push(pushed.shift())
        }
    }
    while (stack.length) {
        if (stack.pop() !== popped.shift()) return false;
    }

    return true
};
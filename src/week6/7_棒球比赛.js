/**
 * https://leetcode-cn.com/problems/baseball-game/
 * 
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    const stack = [];
    let i = 0;
    let result = 0;
    while (i < ops.length) {
        if (ops[i] === 'C') {
            stack.pop()
        } else if (ops[i] === 'D') {
            stack.push(stack[stack.length -1] * 2)
        } else if (ops[i] === '+') {
            stack.push(Number(stack[stack.length -2]) + Number(stack[stack.length -1]))
        } else {
            stack.push(ops[i])
        }
        i++
    }
    while (stack.length > 0) {
        result+= Number(stack.pop())
    }
    return result
};
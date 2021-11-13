/**
 * 有效的括号
 * https://leetcode-cn.com/problems/valid-parentheses/
 */

function isValid(s) {    
    const leftSigns = ['(', '{', '['];
    const leftStack = [];
    const arr = s.split('')
    for (let val of arr) {
        if (leftSigns.includes(val)) {
            leftStack.push(val)
        } else {
            if (!isCouple(leftStack.pop(), val)) return false;
        }
    }
    return leftStack.length === 0    
}

const isCouple = function (l, r) {
    if ((l === '(' && r === ')') || (l === '{' && r === '}') || (l === '[' && r === ']')) return true;
    return false
}

const result = isValid('()[]{}')
console.log(result)
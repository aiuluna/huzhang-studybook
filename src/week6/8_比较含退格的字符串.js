/**
 * https://leetcode-cn.com/problems/backspace-string-compare/ 
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    const s_stack = [];
    const t_stack = [];

    for (i of s) {
        i === '#' ? s_stack.pop() : s_stack.push(i)
    }
    for (i of t) {
        i === '#' ? t_stack.pop() : t_stack.push(i)
    }
    return s_stack.toString() === t_stack.toString()
};
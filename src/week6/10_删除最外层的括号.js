/**
 * https://leetcode-cn.com/problems/remove-outermost-parentheses/
 * 
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function (s) {
    const leftStack = [];
    let ans = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (leftStack.length) {
                ans += '('
            }
            leftStack.push(i)
        } else {
            if (leftStack.length > 1) {
                ans += ")"
            }
            leftStack.pop()
        }
    }
    return ans
};
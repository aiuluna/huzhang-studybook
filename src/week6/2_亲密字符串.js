/**
 * https://leetcode-cn.com/problems/buddy-strings/
 * 
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;
    if (s === goal) {
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            if (map.get(s[i])) {
                return true
            } else {
                map.set(s[i], 1)
            }
        }
        return false
    } else {
        let first = -1, second = -1;
        for (let i = 0; i < s.length;i++) {       
            if (s[i] !== goal[i]) {
                if (first === -1) {
                    first = i
                } else if (second === -1) {
                    second = i
                } else {
                    return false
                }
            }
        }      
        return (s[first] === goal[second]) && (s[second] === goal[first])
    }
};
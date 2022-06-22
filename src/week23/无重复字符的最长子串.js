/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    const map = new Map();
    let x = 0, y = 0;
    let max = 0;
    while (x < s.length && y < s.length) {
        if (map.has(s[y]) && x <= map.get(s[y])) {
            x = map.get(s[y]) + 1;
        }
        map.set(s[y], y)
        max = Math.max(max, y - x + 1)
        y++;
    }
    return max;
};
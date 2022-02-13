/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function (s) {
    if (s.length < 10) return [];
    const map = new Map();
    const ans = [];
    let x = 0, y = 10;
    while (y <= s.length) {
        var key = s.substring(x, y);
        if (map.has(key)) {
            if (!map.get(key)) {
                map.set(key, 1)
                ans.push(key)
            }
        } else {
            map.set(key, 0)
        }
        x++;
        y++;
    }
    return ans;
};
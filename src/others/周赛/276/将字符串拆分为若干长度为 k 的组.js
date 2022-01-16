/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
 var divideString = function (s, k, fill) {
    let x = '', ans = [];
    let i = 0;
    while (i < s.length) {
        while (x.length < k) {
            x += s[i] || fill;
            i++;
        }
        ans.push(x);
        x = ''
    }
    return ans;
};
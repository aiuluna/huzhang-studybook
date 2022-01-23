/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function (s) {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        const d = s[i].charCodeAt() - 'a'.charCodeAt();
        if (arr[d]) {
            arr[d][1] = i;
        } else {
            arr[d] = [i, i]
        }
    }


    arr.sort((a, b) => a[0] - b[0])
    const temp = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (!arr[i]) break;
        const [x, y] = temp[temp.length - 1];
        const [a, b] = arr[i];
        if (a > y) {
            temp.push([a, b])
        } else if (b <= y) continue;
        else {
            temp[temp.length - 1][1] = b
        }
    }
    const ans = []
    for (let [a, b] of temp) {
        ans.push(b - a + 1)
    }
    return ans
};
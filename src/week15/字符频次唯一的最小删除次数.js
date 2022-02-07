/**
 * @param {string} s
 * @return {number}
 */
 var minDeletions = function (s) {
    const arr = new Array(26);
    for (char of s) {
        const idx = char.charCodeAt('') - 'a'.charCodeAt('');
        arr[idx] ? arr[idx].num++ : arr[idx] = { key: char, num: 1 };
    }
    arr.sort((a, b) => b.num - a.num)
    let ans = 0;
    for (let i = 1; i < arr.length; i++) {
        if (!arr[i]) break;
        while(arr[i].num >= arr[i-1].num && arr[i].num > 0) {
            arr[i].num--;
            ans++;
        }
    }
    return ans
};
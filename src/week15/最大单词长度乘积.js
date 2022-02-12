/**
 * 二分查是否重合
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function (words) {
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').sort((a, b) => a.charCodeAt('') - b.charCodeAt(''))
    }
    words.sort((a, b) => a.length - b.length);
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = words.length - 1; j > i; j--) {
            if (hasRepeat(words[i], words[j])) continue;
            max = Math.max(words[i].length * words[j].length, max);
            break;
        }
    }
    return max
};

// str2长于str1
var hasRepeat = function (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const target = arr1[i].charCodeAt('');
        let left = 0, right = arr2.length - 1, mid;
        while (left <= right) {
            mid = left + ((right - left) >> 1);
            const current = arr2[mid].charCodeAt('');
            if (current === target) {
                return true
            } else if (current < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
}



/**
 * 位运算
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function (words) {
    // 设置一个nums，每一项表示每个单词低位表示的数
    const nums = new Array(words.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            // 1向左移动每个字母大小的位置，再或nums[i]，得到这个单词每个字母在的位置（或运算只有两个都是0才是0）
            nums[i] |= (1 << (words[i][j].charCodeAt() - 'a'.charCodeAt()));
        }
    }
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            // 与运算只有两个都是1才会为1，所以只要没有同位置=1的值，与出来的结果是0，即没有重复
            if (!(nums[i] & nums[j])) {
                max = Math.max(max, words[i].length * words[j].length)
            }
        }
    }
    return max
};
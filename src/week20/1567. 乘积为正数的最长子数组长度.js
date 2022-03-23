/**
 * @param {number[]} nums
 * @return {number}
 */
 var getMaxLen = function (nums) {
    const n = nums.length
    if (n === 1) return nums[0] > 0 ? 1 : 0
    let positive = nums[0] > 0 ? 1 : 0
    let minus = nums[0] < 0 ? 1 : 0
    let max = positive

    for (let i = 1; i < n; i++) {
        const lastP = positive, lastM = minus;
        if (nums[i] > 0) {
            positive = lastP + 1
            minus = lastM === 0 ? 0 : lastM + 1
        } else if (nums[i] < 0) {
            positive = lastM === 0 ? 0 : lastM + 1
            minus = lastP + 1
        } else {
            positive = 0
            minus = 0
        }

        max = Math.max(positive, max)
    }

    return max
};
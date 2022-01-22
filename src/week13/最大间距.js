/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function (nums) {
    const maxVal = Math.max(...nums);
    const temps = new Array(nums.length).fill(0);
    let reg = 1;
    while (maxVal >= reg) {
        const count = new Array(10).fill(0);
        for (let x of nums) {
            count[Math.floor(x / reg) % 10] += 1;
        }
        for (let i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            temps[--count[Math.floor(nums[i] / reg) % 10]] = nums[i];
        }
        nums = [...temps];
        reg *= 10;
    }
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i] - nums[i - 1])
    }
    return max;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function (nums) {
    const bitLen = Math.pow(2, 16);
    const count = new Array(bitLen).fill(0);
    const temp = new Array(nums.length).fill(0);
    // 低16位
    for (let x of nums) {
        count[x % bitLen] += 1;
    }
    for (let i = 1; i < bitLen; i++) {
        count[i] += count[i - 1];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        temp[--count[nums[i] % bitLen]] = nums[i];
    }
    count.fill(0);
    // 高16位
    for (let x of temp) {
        count[parseInt(x / bitLen)] += 1;
    }
    for (let i = 1; i < bitLen; i++) {
        count[i] += count[i - 1];
    }
    for (let i = temp.length - 1; i >= 0; i--) {
        nums[--count[parseInt(temp[i] / bitLen)]] = temp[i]
    }
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i] - nums[i-1])
    }
    return max;
}
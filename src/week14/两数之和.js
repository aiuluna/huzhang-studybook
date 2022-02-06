/**
 * 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
    const ind = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        ind[i] = i;
    }
    ind.sort((a, b) => nums[a] - nums[b])
    let head = 0, tail = ind.length - 1;
    let res = [];
    while (head <= tail) {
        const sum = nums[ind[head]] + nums[ind[tail]];
        if (sum === target) {
            res = [ind[head], ind[tail]];
            break;
        } else if (sum < target) {
            head++;
        } else {
            tail--;
        }
    }
    return res;
};



/**
 * 二分
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
    const ind = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        ind[i] = i;
    }
    ind.sort((a, b) => nums[a] - nums[b]);

    for (let i = 0; i < ind.length; i++) {
        x = target - nums[ind[i]];
        const ans = binary_search(nums, ind, i + 1, x);
        if (ans === -1) continue;
        return [ind[i], ans]
    }

    return [];
};


var binary_search = function (nums, ind, i, target) {
    let head = i, tail = ind.length - 1, mid;
    while (head <= tail) {
        mid = head + ((tail - head) >> 1);
        if (target === nums[ind[mid]]) return ind[mid];
        else if (target > nums[ind[mid]]) head = mid + 1;
        else tail = mid - 1;
    }
    return -1;
}
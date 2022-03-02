/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function (nums) {
    const res = [];
    const arr = [];
    dfs(arr, res, nums)
    return res;
};

var dfs = function (arr, res, nums) {
    if (arr.length === nums.length) {
        res.push([...arr])
        return
    }
    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(nums[i])) continue;
        arr.push(nums[i])
        dfs(arr, res, nums);
        arr.pop()
    }
}
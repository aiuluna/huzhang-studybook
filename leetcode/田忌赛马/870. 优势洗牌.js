/**
 * 输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
 * 输出：[2,11,7,15]
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
    nums1.sort((a, b) => b - a)

    const vc = new Array(nums2.length).fill(0).map(() => new Array(2).fill(0))
    for (let i = 0; i < nums2.length; i++) {
        vc[i][0] = nums2[i];
        vc[i][1] = i;
    }
    vc.sort((a, b) => b[0] - a[0])

    const ans = []

    let i = 0, j = 0;
    let last = nums1.length - 1;
    while (j < nums1.length) {
        if (nums1[i] > vc[j][0]) {
            ans[vc[j][1]] = nums1[i]
            i++
        } else {
            ans[vc[j][1]] = nums1[last];
            last--
        }
        j++
    }
    return ans;
};
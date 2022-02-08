/**
 * O(m+n)，不合格
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    const arr = new Array(m + n);
    let x = 0, y = 0, k = 0;
    while (x < m || y < n) {
        if (y >= n || (x < m && nums1[x] <= nums2[y])) {
            arr[k] = nums1[x];
            x++;
            k++;
        } else {
            arr[k] = nums2[y];
            y++;
            k++;
        }
    }
    const len = arr.length, mid = (len - 1) >> 1;
    if (len % 2 === 1) {
        return arr[mid]
    } else {
        return (arr[mid] + arr[mid + 1]) / 2;
    }
};





/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    const res = (getKData(nums1, nums2, (m + n + 1) >> 1) + getKData(nums1, nums2, (m + n + 2) >> 1)) / 2;
    return res
};


var getKData = function (arr1, arr2, k) {
    const m = arr1.length, n = arr2.length;
    let x = 0, y = 0;
    while (k > 1) {
        // 某个数组删除完了
        if (x >= m) {
            return arr2[y + k - 1]
        } else if (y >= n) {
            return arr1[x + k - 1]
        }
        // 当前要删除的数量
        let i = k >> 1;
        // 判断是否越界
        if (x + i - 1 >= m) {
            i = m - x;
        } else if (y + i - 1 >= n) {
            i = n - y;
        }

        // 删除x之前(包含x)的的i个数
        if (arr1[x + i - 1] <= arr2[y + i - 1]) {
            x += i;
        } else {
            y += i;
        }

        // 重置k
        k -= i;
    }

    return Math.min(x < m ? arr1[x] : Infinity, y < n ? arr2[y] : Infinity)
}
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
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0])
    let res = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        const [x, y] = res[res.length - 1];
        const [a, b] = intervals[i];

        if (a > y) {
            res.push([a, b])
        } else {
            res[res.length - 1] = [x, Math.max(b, y)]
        }

    }
    return res;

}
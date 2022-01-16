/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var removeCoveredIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const pre = [intervals[0]];
    let count = intervals.length;
    for (let i = 1; i < intervals.length; i++) {
        const [x, y] = pre[pre.length - 1];
        const [a, b] = intervals[i];

        if (a === x && b >= y) {
            count--;
            pre.pop()
            pre.push(intervals[i])
        } else if (b <= y) {
            count--
        } else {
            pre.push(intervals[i]);
        }
    }
    return count;
};
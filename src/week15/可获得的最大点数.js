/**
 * 滑动窗口
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
 var maxScore = function (cardPoints, k) {
    const sums = [0];
    for (let i = 0; i < cardPoints.length; i++) {
        sums[i + 1] = sums[i] + cardPoints[i]
    }
    const len = cardPoints.length - k;
    let min = Infinity;
    for (let i = 0; i <= k; i++) {
        min = Math.min(sums[len + i] - sums[i], min)
    }
    return sums[cardPoints.length] - min
};
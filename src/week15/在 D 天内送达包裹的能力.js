/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function (weights, days) {
    let right = 0, left = 0, mid;
    for (let x of weights) {
        right += x;
        left = Math.max(left, x)
    }

    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (canFinish(mid, days, weights)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

var canFinish = function (target, days, weights) {
    let sum = 0, res = 0;
    for (let x of weights) {
        sum += x;
        if (sum > target) {
            res++;
            sum = x;
        } else if (sum === target) {
            res++;
            sum = 0;
        }
    }
    if (sum) res++;
    
    return res <= days
}
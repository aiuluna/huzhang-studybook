/**
 * @param {number[]} values
 * @return {number}
 */
 var maxScoreSightseeingPair = function(values) {
    let max = values[0], res = 0;;
    for (let i = 1; i < values.length; i++) {
        const cur = values[i] - i;
        res = Math.max(res, max + cur);
        max = Math.max(max, values[i] + i);
    }
    return res;
};
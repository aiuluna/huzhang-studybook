/**
 * @param {number[]} array
 * @return {number[]}
 */
 var subSort = function (array) {
    let m = -1, n = -1;
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < max) {
            n = i
        } else {
            max = Math.max(max, array[i])
        }
    }
    let min = Infinity;
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] > min) {
            m = i
        } else {
            min = Math.min(min, array[i])
        }
    }
    return [m, n]
};
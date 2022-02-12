/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
    const n = matrix.length;
    let x = 0, y = n - 1;
    while (x < matrix[0].length && y >= 0) {
        if (matrix[y][x] === target) return true;
        else if (matrix[y][x] > target) {
            y--
        } else {
            x++
        }
    }
    return false;
};
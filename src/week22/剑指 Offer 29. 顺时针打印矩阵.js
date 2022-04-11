/**
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	const res = []
	const m = matrix.length,
		n = matrix[0].length
	dfs(matrix, 0, m - 1, 0, n - 1, res)
    return res;
}

const dfs = function (matrix, startX, endX, startY, endY, arr) {
	if (startX > endX || startY > endY) return;

	let i = startX,
		j = startY

    if (startX === endX) {
        while (j <= endY) {
            arr.push(matrix[i][j])
            j++
        }
        return;
    }
    if (startY === endY) {
        while(i <= endX) {
            arr.push(matrix[i][j])
            i++
        }
        return
    }

	while (j <= endY) {
		arr.push(matrix[i][j])
		j++
	}
	j--
	i++
	while (i <= endX) {
		arr.push(matrix[i][j])
		i++
	}
	i--
    j--
	while (j >= startY) {
		arr.push(matrix[i][j])
		j--
	}
	j++
    i--
	while (i > startX) {
		arr.push(matrix[i][j])
		i--
	}
	startX = startX + 1
	startY = startY + 1
	endX = endX - 1
	endY = endY - 1
    dfs(matrix, startX, endX, startY, endY, arr);
}

var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
spiralOrder(matrix)
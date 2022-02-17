/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function (matchsticks) {
    let sum = 0;
    for (let x of matchsticks) {
        sum += x;
    }
    if (sum % 4 !== 0) return false;
    const target = sum / 4;
    const arr = new Array(4).fill(0);
    matchsticks.sort((a, b) => b - a);

    var backTarck = function (i) {
        if (i === matchsticks.length) {
            return arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[3]
        }

        for (let j = 0; j < arr.length; j++) {
            if (matchsticks[i] + arr[j] <= target) {
                arr[j] += matchsticks[i];
                if (backTarck(i+1)) {
                    return true
                }
                arr[j] -= matchsticks[i]
            }
        }
        return false;

    }

    return backTarck(0);
};



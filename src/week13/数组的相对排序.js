/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function (arr1, arr2) {
    const map = new Map();
    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], i)
    }

    arr1.sort((a, b) => {
        if (map.has(a) && map.has(b)) {
            return map.get(a) - map.get(b)
        } else if (!map.has(a) && !map.has(b)) {
            return a - b
        } else {
            return map.has(a) ? -1 : 1
        }
    })

    return arr1
};
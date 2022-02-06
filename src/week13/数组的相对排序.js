/**
 * 比较排序
 * 
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


/**
 * 计数排序
 * 
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    const count = new Array(1001).fill(0);
    for (let i = 0; i < arr1.length; i++) {
        count[arr1[i]]++;
    }

    let k = 0;
    for (let x of arr2) {
        for (let i = 0; i < count[x]; i++) {
            arr1[k++] = x
        }
        count[x] = 0;
    }
    for (let i = 0; i < count.length; i++) {
        if (!count[i]) continue;
        for (let j = 0; j < count[i]; j++) {
            arr1[k++] = i
        }
    }
    return arr1;
};
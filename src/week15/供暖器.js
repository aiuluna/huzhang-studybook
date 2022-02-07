/**
 * 双指针
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
 var findRadius = function (houses, heaters) {

    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);

    let x = 0, y = 0;
    let res = 0;
    while (x < houses.length) {
        // 如果有下一个取暖器
        if (y + 1 < heaters.length) {
            // 如果有取暖器，判断当前取暖器跟下一个取暖器的距离大小，确定该使用下一个取暖器还是当前取暖器
            if (Math.abs(houses[x] - heaters[y]) < Math.abs(houses[x] - heaters[y + 1])) {
                res = Math.max(Math.abs(houses[x] - heaters[y]), res);
                x++;
            } else {
                y++;
            }
        } else {
            while (x < houses.length) {
                res = Math.max(Math.abs(houses[x] - heaters[y]), res);
                x++;
            }
        }
    }
    return res;
};
/**
 * https://leetcode-cn.com/problems/lemonade-change/
 * 
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    let fiveCount = 0, tenCount = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fiveCount++;            
        } else if (bills[i] === 10) {
            tenCount++;
            fiveCount--;
        } else {
            if (tenCount > 0) {
                tenCount--;
                fiveCount--;
            } else {
                fiveCount -= 3;
            }
        }
        if (fiveCount >= 0 && tenCount >= 0) {
            continue;
        } else {
            return false;
        }
    }
    return true

};
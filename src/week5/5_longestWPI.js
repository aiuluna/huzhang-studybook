/**
 * 表现良好的最长时间段
 * 
 * https://leetcode-cn.com/problems/longest-well-performing-interval/
 * 
 * @param {number[]} hours
 * @return {number}
 */
 var longestWPI = function (hours) {
    const n = hours.length;
    const pre_sum = [0]
    for (let i = 0; i < n; i++) {
        pre_sum[i + 1] = (hours[i] > 8 ? 1 : -1) + pre_sum[i];
    }
    const stack = [0];
    let stackMin = 0;
    for (let i = 0; i < pre_sum.length; i++) {
        if (pre_sum[i] < stackMin) {
            stackMin = pre_sum[i];
            stack.push(i)
        }
    }
    let idx = pre_sum.length - 1;
    let result = 0;
  
    while (idx > result) {
        while (stack.length && pre_sum[idx] > pre_sum[stack[stack.length - 1]]) {
            result = Math.max(result, idx - stack.pop());
        }
        idx--;
    }

    return result
};
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function (temperatures) {
    const stack = [];
    const next = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            next[stack.pop()] = i;
        }
        stack.push(i)
    }

    const ans = [];
    for (let i = 0; i < next.length; i++) {
        if (next[i] === 0) {
            ans[i] = 0
        } else {
            ans[i] = next[i] - i
        }
    }
    return ans
};
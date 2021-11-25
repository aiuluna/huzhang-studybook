/**
 * 函数的独占时间
 * 
 * https://leetcode-cn.com/problems/exclusive-time-of-functions/
 * 
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
 var exclusiveTime = function (n, logs) {
    const stack = [];
    const result = new Array(n).fill(0);

    for (let i = 0; i < logs.length; i++) {
        const [function_id, type, timestamp] = logs[i].split(':');
        if (stack.length === 0) {
            stack.push({ function_id, type, timestamp });
        } else {
            if (stack.length > 0) {
                if (type === 'start') {
                    const data = stack[stack.length - 1];
                    data.type = 'end';
                    data.timestamp = timestamp - data.timestamp;
                    result[data.function_id] += data.timestamp;
                    stack.push({ function_id, type, timestamp });
                } else {
                    const data = stack.pop();
                    if (stack.length > 0) {
                        stack[stack.length - 1].type = 'start';
                        stack[stack.length - 1].timestamp = Number(timestamp) + 1;
                    }
                    result[function_id] += timestamp - data.timestamp + 1;
                }
            }
        }
    }
    return result
};
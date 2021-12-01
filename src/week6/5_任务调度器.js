/**
 * https://leetcode-cn.com/problems/task-scheduler/
 * 
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function (tasks, n) {
    const map = new Map();
    for (let i = 0; i < tasks.length; i++) {
        map.set(tasks[i], map.get(tasks[i]) ? map.get(tasks[i]) + 1 : 1)
    }
    const taskTypes = [];

    for ([, value] of map) {
        taskTypes.push(value)
    }
    taskTypes.sort((a, b) => b - a);
    const ret = [], k = n + 1;
    while (taskTypes[0]) {
        for (let i = 0; i < k; i++) {
            if (taskTypes[i]) {
                taskTypes[i] -= 1;
                ret.push(1)
            } else {
                ret.push(0)
            }
        }
        taskTypes.sort((a, b) => b - a);
    }
    while (!ret[ret.length - 1]) {
        ret.pop()
    }
    // console.log(ret)
    return ret.length;
};
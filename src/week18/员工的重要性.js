/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */
/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
 var GetImportance = function (employees, id) {
    const map = new Map()
    for (let i = 0; i < employees.length; i++) {
        const key = employees[i].id;
        const w = employees[i].importance;
        const children = employees[i].subordinates;

        if (!map.has(key)) {
            map.set(key, new Data(null, []))
        }

        const arr = []
        for (let x of children) {
            if (!map.has(x)) {
                map.set(x, new Data(null, []))
            }
            arr.push(map.get(x))
        }

        map.get(key).val = w;
        map.get(key).children = arr;
    }

    const target = map.get(id);
    if (!target) return 0;
    let ans = 0;
    const dfs = function (root) {
        if (!root) return;
        ans += root.val;
        for (let x of root.children) {
            dfs(x)
        }
    }

    dfs(target);
    return ans;
}



const Data = function (val, ...children) {
    this.val = val
    this.children = children
}

/**
 * 基本计算器 II
 * 
 * https://leetcode-cn.com/problems/basic-calculator-ii/
 * 
 * @param {string} s
 * @return {number}
 */
 var calculate = function (s) {
    const symble_map = new Map();
    symble_map.set('+', 0);
    symble_map.set('-', 1);
    symble_map.set('*', 2);
    symble_map.set('/', 3);

    const base_stack = [];
    const specil_stack = [];

    let i = 0;
    while (i < s.length) {
        if (s[i] === ' ') {
            i++;
        } else if (symble_map.has(s[i])) {
            if (symble_map.get(s[i]) > 1) {
                specil_stack.push(base_stack.pop());
                specil_stack.push(s[i]);
                i++;
            } else {
                base_stack.push(s[i]);
                i++;
            }
        } else {
            let num = '';
            while (i < s.length && s[i] !== ' ' && !symble_map.has(s[i])) {
                num += s[i]
                i++;
            }
            if (symble_map.has(specil_stack[specil_stack.length - 1])) {
                const s_symbol = specil_stack.pop();
                let data;
                // console.log(specil_stack)
                if (symble_map.get(s_symbol) === 2) {
                    data = num * specil_stack.pop();
                } else {
                    data = Math.floor(specil_stack.pop() / num)
                }
                base_stack.push(data)
            } else {
                base_stack.push(parseInt(num))
            }
        }
    }

    const calculate_stack = []
    for (let i = 0; i < base_stack.length; i++) {
        if (!symble_map.has(base_stack[i]) && calculate_stack.length > 0) {
            const base_symbol = calculate_stack.pop();
            const data = symble_map.get(base_symbol) === 0 ? (base_stack[i] + calculate_stack.pop()) : (calculate_stack.pop() - base_stack[i]);
            calculate_stack.push(data);
        } else {
            calculate_stack.push(base_stack[i])
        }
    }

    return calculate_stack.pop()
};
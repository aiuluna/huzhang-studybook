var nums = [[1,5],[2,6],[5,6],[6,-1],[4,-1]];

function getSubs(boss, nums) {
    let subs = []
    for (let [x, b] of nums) {
        if (b == boss) {
            let s = getSubs(x, nums);
            subs = subs.concat(s);
        }
    }
    if (!subs.length) return [{"id": boss}]
    else return [{"id": boss, "subs": subs}]
}

const res = getSubs(-1, nums)
console.log(res); 
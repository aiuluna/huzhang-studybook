/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function (numCourses, prerequisites) {
    const graph = new Graph(numCourses)
    const rudu = new Array(numCourses).fill(0);
    const queue = [];
    const res = [];

    for (let [a, b] of prerequisites) {
        rudu[a]++;
        graph.add(b, a);
    }


    for (let i = 0; i < rudu.length; i++) {
        if (rudu[i] === 0) queue.push(i);
    }

    while (queue.length) {
        const top = queue.shift();
        res.push(top);

        let { nodelist } = graph.list[top];
        while (nodelist) {
            rudu[nodelist.val]--;
            if (!rudu[nodelist.val]) queue.push(nodelist.val);
            nodelist = nodelist.next;
        }
    }

    for (let i = 0; i < rudu.length; i++) {
        if (rudu[i]) return []
    }

    return res;
};

const Graph = function (v) {
    this.v = v;
    this.list = new Array(v);
    for (let i = 0; i < v; i++) {
        this.list[i] = {
            val: i,
            nodelist: null
        }
    }
}

Graph.prototype.add = function (s, t) {
    const { nodelist } = this.list[s];
    const node = new ListNode(t, nodelist);
    this.list[s].nodelist = node;
}

const ListNode = function (val, next) {
    this.val = (val || val === 0) ? val : null;
    this.next = next;
}
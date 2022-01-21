// DFS
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function (numCourses, prerequisites) {
    const graph = new Graph(numCourses);

    for (let [a, b] of prerequisites) {
        graph.add(b, a)
    }

    const visited = new Array(numCourses).fill(0);
    const path = new Array(numCourses).fill(0);
    let hasCycle = false;
    const dfs = function (s) {
        if (path[s]) {
            hasCycle = true;
            return;
        }
        if (visited[s] || hasCycle) return;
        visited[s] = 1;

        path[s] = 1;
        let { nodeList } = graph.list[s];
        while (nodeList) {
            dfs(nodeList.val)
            nodeList = nodeList.next;
        }
        path[s] = 0;
    }

    for (let i = 0; i < numCourses; i++) {
        dfs(i)
    }

    return !hasCycle

};

const Graph = function (v) {
    this.list = new Array(v);
    for (let i = 0; i < v; i++) {
        this.list[i] = {
            val: i,
            nodeList: null
        }
    }
}

Graph.prototype.add = function (s, t) {
    const { nodeList } = this.list[s];
    const node = new ListNode(t, nodeList);
    this.list[s].nodeList = node;
}

const ListNode = function (val, next) {
    this.val = (val || val === 0) ? val : null;
    this.next = next || null;
}



// 入度BFS
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function (numCourses, prerequisites) {
    const graph = new Graph(numCourses);
    const queue = [];
    const rudu = new Array(numCourses).fill(0);

    for (let [a, b] of prerequisites) {
        graph.add(b, a);
        rudu[a]++;
    }

    for (let i = 0; i < rudu.length; i++) {
        if (rudu[i] === 0) {
            queue.push(i)
        }
    }

    while (queue.length) {
        const top = queue.shift();
        let { nodeList } = graph.list[top];
        while (nodeList) {
            rudu[nodeList.val]--;
            if (!rudu[nodeList.val]) queue.push(nodeList.val);
            nodeList = nodeList.next;
        }
    }

    for (let r of rudu) {
        if (r) {
            return false
        }
    }
    return true
};

const Graph = function (v) {
    this.v = v;
    this.list = []
    for (let i = 0; i < v; i++) {
        this.list[i] = {
            val: i,
            nodeList: null
        }
    }
}

Graph.prototype.add = function (s, t) {
    const { nodeList } = this.list[s];
    const node = new ListNode(t, nodeList);
    this.list[s].nodeList = node;
}

const ListNode = function (val, next) {
    this.val = (val || val === 0) ? val : null;
    this.next = next;
}
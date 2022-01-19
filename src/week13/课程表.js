/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function (numCourses, prerequisites) {
    const visited = [];

    const graph = new Graph(numCourses);

    for (let i = 0; i < prerequisites.length; i++) {
        const [a, b] = prerequisites[i];
        graph.addEdge(b, a);
    }

    var onPath = [];
    var hasCycle = false;
    var dfs = function (s) {
        if (onPath[s]) {
            hasCycle = true;
            return
        }
        if (visited[s]) return;

        visited[s] = true;
        onPath[s] = true;
        let list = graph.adj[s].next;
        while (list) {
            dfs(list.val)
            list = list.next;
        }
        onPath[s] = false;
    }

    for (let i = 0; i < numCourses; i++) {
        dfs(i)
    }

    return !hasCycle

};

var ListNode = function (val, next) {
    this.val = (val || val === 0) ? val : null
    this.next = next || null;
}


class Graph {
    constructor(v) {
        this.v = v;
        this.adj = [];
        for (let i = 0; i < v; i++) {
            this.adj[i] = new ListNode(i)
        }
    }

    addEdge(a, b) {
        let cur = this.adj[a];
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = new ListNode(b)
    }
}

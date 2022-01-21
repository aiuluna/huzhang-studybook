/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function (graph) {
    const _graph = new Graph(graph.length)
    for (let i = 0; i < graph.length; i++) {
        const item = graph[i];
        for (let j = 0; j < item.length; j++) {
            _graph.add(i, item[j])
        }
    }

    const res = [];
    // const visited = new Array(graph.length).fill(0)
    let path = [];
    var dfs = function (s, t) {
        // 访问到最终顶点
        // if (visited[s]) return;
        // visited[s] = 1;
        path.push(s)
        if (s === t) {
            res.push([...path])
            return;
        }

        let { nodeList } = _graph.list[s];
        while (nodeList) {
            dfs(nodeList.val, t)
            path.pop()
            nodeList = nodeList.next;
        }

    }
    dfs(0, graph.length - 1)
    
    return res;
};


const Graph = function (v) {
    this.v = v;
    this.list = [];
    for (let i = 0; i < v; i++) {
        this.list[i] = {
            val: i,
            nodeList: null
        };
    }
}

Graph.prototype.add = function (s, t) {
    let { nodeList } = this.list[s];
    const node = new ListNode(t, nodeList);
    this.list[s].nodeList = node;
}

const ListNode = function (val, next) {
    this.val = (val || val === 0) ? val : null;
    this.next = next || null;
}

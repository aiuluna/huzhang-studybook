var UnionSet = function (n) {
    this.fathers = new Array(n+1);
    this.size = new Array(n+1)
    for (let i = 1; i <= n; i++) {
        this.fathers[i] = i
        this.size[i] = 1
    }
    
}

UnionSet.prototype.find = function(x) {
    if (this.fathers[x] === x) return x;
    return this.find(this.fathers[x])
}

UnionSet.prototype.merge = function(a, b) {
    const fa = this.find(a), fb = this.find(b);
    if (fa === fb) return;
    if (this.size[fa] < this.size[fb]) {
        this.fathers[fa] = fb
        this.size[fb] += this.size[fa]
    } else {
        this.fathers[fb] = fa
        this.size[fa]+= this.size[fb]
    }
    
}
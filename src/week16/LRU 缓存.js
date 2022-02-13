/**
 * @param {number} capacity
 */
 var LRUCache = function (capacity) {
    this.map = new Map();
    this.capacity = capacity;
    this.link = null;
    this.count = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.capacity) return -1;
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    const prev = node.prev;
    const next = node.next;

    if (prev) {
        prev.next = next;
        if (next) {
            next.prev = prev;
        }

        node.prev = null;
        node.next = this.link;
        this.link.prev = node;
        this.link = node;
    }
    return node.val[1]
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (!this.capacity) return;
    // 没有值
    if (!this.count) {
        const node = new ListNode([key, value])
        this.link = node;
        this.map.set(key, node);
        this.count++;
    } else {
        // map中没有，说明是新缓存
        if (!this.map.has(key)) {
            const node = new ListNode([key, value], this.link)
            // 替换head
            const head = this.link;
            head.prev = node;
            this.link = node;

            this.map.set(key, node);
            // 判断超限
            if (this.count < this.capacity) {
                this.count++;
            } else {
                let cur = this.link;
                while (cur.next) {
                    cur = cur.next
                };
                const prev = cur.prev;
                prev.next = null;
                this.map.delete(cur.val[0]);
            }
        } else {
            const node = this.map.get(key);
            node.val[1] = value;
            const prev = node.prev;
            const next = node.next;
            if (!prev) return;
            prev.next = next;
            if (next) {
                next.prev = prev;
            }

            node.prev = null;
            node.next = this.link;
            this.link.prev = node;
            this.link = node;
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var ListNode = function (val, next, prev) {
    this.val = val;
    this.next = next || null;
    this.prev = prev || null;
}
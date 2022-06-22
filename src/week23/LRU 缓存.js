/**
 * @param {number} capacity
 */
 var LRUCache = function (capacity) {
    this.cache = new Map();
    this.head = this.tail = null;
    this.count = 0;
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1;

    this.swapPrevNext(key);

    const cur = this.cache.get(key);
    cur.next = this.head;
    if (this.head) {
        this.head.prev = cur
    }
    this.head = cur;
    if (!this.tail) this.tail = cur;

    // console.log('==========get')
    // console.log(key)
    // console.log(this.head)
    // console.log(this.tail)
    // console.log(this.cache)
    // console.log('==============')
    return cur.value.value;

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const data = new Data(key, value);
    const node = new ListNode(data);
    if (!this.count) {
        this.head = node;
        this.tail = node;
    } else {
        if (this.cache.has(key)) {
            this.swapPrevNext(key);
            this.count--;
        }
        node.next = this.head;
        if (this.head) {
            this.head.prev = node
        }
        this.head = node;
        if (!this.tail) this.tail = node;
    }
    this.count++;
    this.cache.set(key, node);
    this.isOverSize();

    // console.log('==========put')
    // console.log(key)
    // console.log(this.head)
    // console.log(this.tail)
    // console.log(this.cache)
    // console.log('==============')
};

LRUCache.prototype.isOverSize = function () {
    if (!this.tail) return;
    if (this.count > this.capacity) {
        const tail = this.tail;
        const prev = tail.prev;
        if (prev) {
            prev.next = null;
            this.tail = prev;
        }
        const key = tail.value.key;
        this.cache.delete(key);
        this.count--;
    }
}

LRUCache.prototype.swapPrevNext = function (key) {
    const cur = this.cache.get(key);
    const prev = cur.prev;
    const next = cur.next;
    if (prev) {
        prev.next = next;
    } else {
        this.head = next;
    }
    if (next) {
        next.prev = prev;
    } else {
        this.tail = prev;
    }
    cur.prev = null;
    cur.next = null;
}

const ListNode = function (value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
}

const Data = function (key, value) {
    this.key = key;
    this.value = value;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
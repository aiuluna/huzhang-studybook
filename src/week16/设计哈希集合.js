var ListNode = function (val, next) {
    this.val = val;
    this.next = next || null;
}

var MyHashSet = function () {
    this.data = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    // 如果有值，不处理
    if (this.contains(key)) return;

    const idx = this.hashFunc(key);
    if (this.data[idx]) {
        let head = this.data[idx];
        while (head.next) {
            head = head.next
        }
        head.next = new ListNode(key);
    } else {
        this.data[idx] = new ListNode(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    if (!this.contains(key)) return;

    const idx = this.hashFunc(key);
    let head = this.data[idx];
    // 第一个就是key
    if (head.val === key) {
        if (!head.next) {
            this.data[idx] = null
        } else {
            this.data[idx] = head.next;
        }
    } else {
        while (head.next) {
            const next = head.next;
            if (next.val === key) {
                head.next = head.next.next;
            }
            head = next;
        }
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    const idx = this.hashFunc(key);
    if (this.data[idx]) {
        let head = this.data[idx];
        while (head) {
            if (head.val !== key) {
                head = head.next;
            } else {
                return true
            }
        }
        return false;
    } else {
        return false;
    }
};


MyHashSet.prototype.hashFunc = function (key) {
    const MOD = 773;
    return key % MOD;
}



/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
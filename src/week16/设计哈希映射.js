var ListNode = function (val, next) {
    this.val = val;
    this.next = next || null;
}

var MyHashMap = function () {
    this.data = new Array(this.getMOD());
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    const idx = this.hashFunc(key);
    let head = this.data[idx];
    if (!head) {
        this.data[idx] = new ListNode([key, value])
    } else {
        while (head) {
            if (head.val[0] === key) {
                head.val[1] = value;
                return;
            }
            if (!head.next) {
                head.next = new ListNode([key, value])
                return;
            }
            head = head.next;
        }
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const idx = this.hashFunc(key);
    let head = this.data[idx];
    if (!head) {
        return -1
    } else {
        while (head) {
            if (head.val[0] === key) {
                return head.val[1]
            }
            head = head.next
        }

    }
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    const idx = this.hashFunc(key);
    let head = this.data[idx];
    if (head) {
        if (head.val[0] === key) {
            this.data[idx] = head.next;
        } else {
            while (head.next) {
                const next = head.next;
                if (next.val[0] === key) {
                    head.next = head.next.next;
                }
                head = next;
            }
        }
    }
};

MyHashMap.prototype.getMOD = function () {
    return 773
}

MyHashMap.prototype.hashFunc = function (key) {
    const MOD = this.getMOD();
    return key % MOD;
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// 因为用Date.now()有可能值相等，在实际情况中应该使用时间戳，这里用自增长的num值代替
let timestamp = 0;
const MAX_FEEDS = 10;

var Twitter = function () {
    // 用户表
    this.userMap = new Map();
    // 小顶堆，用来合并数据
    this.maxHeap = new Heap((a, b) => a.timestamp < b.timestamp, MAX_FEEDS);
};

// 用户表
var User = function (userId) {
    this.userId = userId;
    this.followSet = new Set();
    // 链表用来新增消息节点
    this.feeds = null;
}

// 消息节点
var LinkNode = function (tweetId, next) {
    this.next = next || null;
    this.val = {
        tweetId,
        timestamp: timestamp++
    }
}

// 当前用户插入一则新闻
User.prototype.postTweet = function (tweetId) {
    const current = this.feeds;
    const node = new LinkNode(tweetId, current);
    this.feeds = node;
}

// 用户关注
User.prototype.follow = function (followeeId) {
    // 关注账号等于当前账号
    if (this.userId === followeeId) return;
    // 关注列表中有该账号
    if (this.followSet.has(followeeId)) return;
    this.followSet.add(followeeId);
}
// 用户取关
User.prototype.unfollow = function (followeeId) {
    // 关注账号等于当前账号
    if (this.userId === followeeId) return;
    // 关注列表中无该账号
    if (!this.followSet.has(followeeId)) return;
    this.followSet.delete(followeeId)
}


/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    // 用户表中没有该用户
    if (!this.userMap.has(userId)) {
        this.userMap.set(userId, new User(userId));
    }
    const user = this.userMap.get(userId);
    user.postTweet(tweetId);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    if (!this.userMap.has(userId)) return [];
    const user = this.userMap.get(userId);
    // 使用前先清除堆
    this.maxHeap.clear();
    // 当前用户有新闻
    if (user.feeds) {
        let current = user.feeds;
        while (current && this.maxHeap.getSize() < MAX_FEEDS) {
            this.maxHeap.push(current.val)
            current = current.next;
        }
    }

    // 关注列表处理，多路合并
    let count = user.followSet.size;
    if (count) {
        for (let followeeId of user.followSet) {
            const curUser = this.userMap.get(followeeId)
            let current = curUser.feeds;
            while (current) {
                if (this.maxHeap.getSize() === MAX_FEEDS && current.val.timestamp < this.maxHeap.getTop().timestamp) {
                    break;
                } else {
                    if (this.maxHeap.getSize() === MAX_FEEDS) {
                        this.maxHeap.pop();
                    }
                    this.maxHeap.push(current.val);
                    current = current.next;
                }
            }
        }
    }
    const ans = [];
    let heapCount = this.maxHeap.getSize();
    // 因为是小顶堆，最上面的时间戳最小，所以要放入结果数组的最尾部
    while (heapCount) {
        ans.unshift(this.maxHeap.pop().tweetId);
        heapCount--;
    }
    return ans;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    // 推特中没有该用户，新建用户
    if (!this.userMap.has(followerId)) {
        this.userMap.set(followerId, new User(followerId))
    }
    const user = this.userMap.get(followerId);
    // 推特中没有关注用户账号
    if (!this.userMap.get(followeeId)) {
        this.userMap.set(followeeId, new User(followeeId))
    }
    user.follow(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    // 推特中没有该用户，新建用户
    if (!this.userMap.has(followerId)) {
        this.userMap.set(followerId, new User(followerId))
    }
    const user = this.userMap.get(followerId);
    // 推特中没有关注用户账号
    if (!this.userMap.get(followeeId)) {
        this.userMap.set(followeeId, new User(followeeId))
    }
    user.unfollow(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

class Heap {
    constructor(compare, max) {
        this.heap = [];
        this.count = 0;
        // 默认小顶堆
        this.compare = compare || ((a, b) => a < b);
        this.max = max || Infinity;
    }
}

Heap.prototype.push = function (val) {
    if (this.count === this.max) return false;
    this.heap[this.count++] = val;
    this.heapifyUp();
    return true;
}

Heap.prototype.pop = function () {
    if (this.count === 0) return false;
    const top = this.heap[0];
    this.swap(0, this.count - 1);
    this.count--;
    this.heapifyDown();
    return top;
}

Heap.prototype.heapifyDown = function () {
    const compare = this.compare;
    let i = 0;
    while (i < this.count) {
        let temp = i;
        if (i * 2 + 1 < this.count && compare(this.heap[i * 2 + 1], this.heap[i])) {
            temp = i * 2 + 1;
        }
        if (i * 2 + 2 < this.count && compare(this.heap[i * 2 + 2], this.heap[temp])) {
            temp = i * 2 + 2;
        }
        if (temp === i) break;
        this.swap(temp, i);
        i = temp;
    }
}

Heap.prototype.heapifyUp = function () {
    const compare = this.compare;
    let i = this.count - 1;
    while (i > 0) {
        if (compare(this.heap[i], this.heap[(i - 1) >> 1])) {
            this.swap(i, (i - 1) >> 1)
            i = (i - 1) >> 1
        } else {
            break;
        }
    }
}

Heap.prototype.clear = function () {
    this.heap = [];
    this.count = 0;
}

Heap.prototype.swap = function (a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
}

Heap.prototype.get = function () {
    return this.heap;
}

Heap.prototype.getTop = function () {
    return this.heap[0];
}

Heap.prototype.getSize = function () {
    return this.count;
}

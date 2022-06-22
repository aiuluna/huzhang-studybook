## fiber

### fiber 是什么？

-   是 React Element 数据的镜像，一个执行单元
-   是 diff 工作的流程，一种流程控制，协程？

### fiber 的前提

浏览器的主动让出机制（合作式调度），chrome 的实现`requestIdleCallback`。

```javascript
window.requestIdleCallback(
  callback: (dealine: IdleDeadline) => void,
  option?: {timeout: number}
)

interface IdleDealine {
  didTimeout: boolean // 表示任务执行是否超过约定时间
  timeRemaining(): DOMHighResTimeStamp // 任务可供执行的剩余时间
}
```

参考：[你应该知道的 requestIdleCallback](https://juejin.cn/post/6844903592831238157)

### fiber 的结构

一个链表结构

```javascript
function FiberNode(...) {
    // 工作类型(fiber类型) => 属性更新，usestate等hooks更新，或者function Component, ComponentClass更新，tag都是不相同的
    this.tag = tag;

    // reactElement.key => diff
    this.key = key;

    // reactElement.type
    this.elementType = null;

    // Fiber
    // 执行完当前工作返回的fiber
    this.return = null;

    // 当前fiber的最左侧子fiber
    this.child = null;

    // 当前fiber下一个同级节点 => 兄弟节点
    this.sibling = null;

    ...
}
```

### fiber 的 workInProgress

Fiber Current => Fiber InProgress
每个 fiber 都会生成一个对应的 workInProgress，当发生变更时，原 fiber 不变，新构造一个`WorkInProgress Fiber`，原 fiber 与其互相指向。
例如：当组件的`state`或者`props`发生变化时，就会生成新的新的`WorkInProgress Fiber`。
dom diff 就是在`Fiber Current`与`Fiber InProgress`之间比较，找出 updates，然后在`WIP`树上每个需要变更的节点上打上标签，最后一次性提交更新。

这种操作技巧叫做`Copy On Write`，当有变更的时候，先复制原有对象，修改完成后再替换原有对象。

### fiber 更新的两个阶段

-   协调阶段（计算阶段）=> 可中断
    -   计算 Work In Progress Fiber
    -   进行 DOM DIFF，计算 dom 的更新
    -   该阶段的生命周期
        -   constructor
        -   componentWillMount 废弃
        -   componentWillReceiveProps 废弃
        -   static getDerivedStateFromProps
        -   shouldComponentUpdate
        -   componentWillUpdate 废弃
        -   render
-   提交阶段 => 不可中断

    -   一次性提交所有更新
    -   该阶段的生命周期
        -   getSnapshotBeforeUpdate()
        -   componentDidMount
        -   componentDidUpdate
        -   componentWillUnmount

参考:[这可能是最通俗的 React Fiber(时间分片) 打开方式](https://juejin.cn/post/6844903975112671239#heading-3)

**fiber 为何可以并发、diff 为何可以中断**
    
一个 reactElement 可以生成多个 fibers，甚至一个 fiber 可以拆分成多个 fiber，当某一个 fiber 执行 diff 完成后，就检查时间是否充足，充足就执行下一个 fiber，否则保存现场（链表结构保证了可以从上次未完成的节点继续 diff），将线程控制权交给浏览器，等待下一个任务调度时间。

所以细粒度的 fiber 保证了可以并发，而链表结构保证了可以中断 diff 操作。而中断操作有可能会导致一些协调阶段的生命周期如`componentWillMount、componentWillUpdate`多次执行，所以不建议在协调阶段执行有 effects 的代码。

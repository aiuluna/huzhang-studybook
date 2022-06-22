class Handler {
    private successor: Handler;
    private doHandler: Function;
    constructor(callback) {
        this.doHandler = callback;
    }

    public setSuccessor(successor: Handler) {
       this.successor = successor;
    }

    public handle() {
        this.doHandler();
        if (this.successor) {
            this.successor.doHandler()
        }
    }
}

class HandlerChain {
    private head: Handler = null;
    private tail: Handler = null;

    public addHandler(handler: Handler) {
        // 设置下一个执行
        handler.setSuccessor(null);

        if (!this.head) {
            this.head = handler;
            this.tail = handler;
            return;
        }

        this.tail.setSuccessor(handler)
        this.tail = handler;
    }

    public handle() {
        if (this.head) {
            this.head.handle()
        }
    }

}

const handler1 = new Handler(() => console.log('handler-1'))
const handler2 = new Handler(() => console.log('handler-2'))

const chain = new HandlerChain();
chain.addHandler(handler1);
chain.addHandler(handler2);

chain.handle();
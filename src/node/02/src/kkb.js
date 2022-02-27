const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');
const {compose} = require('./middleware')

class KKB {
    constructor() {
        this.middlewares = [];
    }

    use(middleware) {
        this.middlewares.push(middleware)
    }

    listen(...args) {
        http.createServer(async (req, res) => {
            // 创建上下文
            const ctx = this.createContext(req, res);
            // 中间件合成
            const middlewareFn = compose(this.middlewares);
            // 执行中间件
            await middlewareFn(ctx)

            // this.callback(ctx);

            res.end(ctx.body)

        }).listen(args[0]);
        args[1]()
    }

    createContext(req, res) {
        const ctx = Object.create(context);
        ctx.request = Object.create(request);
        ctx.response = Object.create(response);

        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;

        return ctx
    }
}

module.exports = KKB;
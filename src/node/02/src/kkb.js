const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');

class KKB {
    use(cb) {
        this.callback = cb;
    }

    listen(...args) {
        http.createServer((req, res) => {
            const ctx = this.createContext(req, res);
            this.callback(ctx);

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
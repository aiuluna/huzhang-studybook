const KKB = require('./kkb');

const app = new KKB(); 

app.use(async (ctx, next) => {
    // res.end('Hello kkb')
    ctx.body = 'hello 666';
    await next();
    ctx.body += '111'
})

app.use(async (ctx, next) => {
    ctx.body += '777'    
    await next();
    ctx.body += '000'
})

app.use(async (ctx, next) => {
    ctx.body += '888'    
    await next();
    ctx.body += '999'
})

app.listen(3000, () => {
    console.log('server at 3000')
})
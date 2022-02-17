const KKB = require('./kkb');

const app = new KKB(); 

app.use((ctx) => {
    // res.end('Hello kkb')
    ctx.body = 'hello 666'
})

app.listen(3000, () => {
    console.log('server at 3000')
})
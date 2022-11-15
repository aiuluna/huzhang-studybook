const { stdin, stdout, stderr } = require('process')
const process = require('process')
const child_process = require('child_process')

const { Buffer } = require('buffer')

// const bf = Buffer.from([1,2,3])
// console.log(bf)

// stdin.on('data', (data) => {
//     // 输出buffer 16进制 'a'.charCodeAt(0).toString(16)
//     console.log(data)
//     // uncode码
//     for (let i = 0; i < data.length; i++) {
//         console.log(data.readUInt8(i))
//     }
// })

// stdin.pipe(stdout)

// stdout.write('abcd\n')
// stdout.end()

// stdin.pipe(stdout)
// console.error('error123')
// stderr.write('error\n')

// console.log(process.argv)

// console.log(process.argv.slice(process.execArgv.length + 1))

// console.log(process.env)

// child_process.exec('ps', (err, stdout, stderr) => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	
// 	console.log(stdout)
// 	console.log(stderr)
// })

const ps = child_process.spawn('ps')
ps.stdout.pipe(process.stdout)
ps.stdout.on('end', () => {
    console.log('ps end')
})
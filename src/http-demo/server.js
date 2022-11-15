const net = require('net')

const server = net.createServer((socket) => {
	socket.on('data', (data) => {
		console.log('server recived:' + data.toString())
	})
    socket.on('end', () => {
        console.log('client disconnected')
    })
    const res = socket.write('hello client')
    console.log('server write:' + res)
    socket.end()
})
server.listen(3000, () => {
    console.log('server bound')
})
const net = require('net')

const client = net.connect({ port: 3000 }, () => {
    console.log('client connected')
})

// client.on('data', (data) => {
//     console.log('client recived:' + data.toString())
// })

let n = 3;
const handshake = () => {
    if (n > 0) {
        client.write('hello server' + n)
        n--;
        setTimeout(handshake, 1000)
    } else {
        console.log('end')
        client.end()
    }
}
handshake()

client.on('end', () => {
    console.log('client disconnected')
})


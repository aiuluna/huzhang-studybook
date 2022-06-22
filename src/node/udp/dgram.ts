import dgram from 'dgram';

// data gram --- data 最小单位

const server = dgram.createSocket('udp4')

server.on('message', (msg, rInfo) => {

})
server.on('listening', () => {
    
})
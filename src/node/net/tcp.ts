import {createServer} from 'net'

const server = createServer(socket => {
    const content = `HTTP/1.1 200 OK
Content-type: text/html

<html>
    <body>
        <h2>hello world</h2>
    </body>
</html>
`
    socket.write(content)
    socket.end()
})

server.listen(3000, '0.0.0.0')



import net from 'net'
import createFormater from './util/formater.js'
import createParser from './util/parser.js'

const res = {
	version: 'HTTP/1.1',
	status: '404',
	message: 'Not Found',
	headers: {
		date: 'Tue, 05 Jul 2022 06:11:56 GMT',
		connection: 'keep-alive',
		'keep-alive': 'timeout=5',
		'set-cookie': 'BDORZ=27315; max-age=86400; domain=.localhost; path=/',
	},
	body: `<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
    <html><head>
    <title>404 Not Found</title>
    </head><body>
    <h1>Not Found</h1>
    <p>The requested URL /avv2322 was not found on this server.</p>
    </body></html>
    `,
}

const server = net.createServer((socket) => {
	console.log('client connected')
	socket.on('data', (data) => {
        const parser = createParser('request')
        const httpMessage = parser.parse(data.toString())
        
		console.log(httpMessage)
	})
	socket.on('end', () => {
		console.log('client disconnected')
	})
	socket.end(createFormater('response').format(res))
})

server.listen(3000, function () {
	console.log('server listening on port 3000')
})

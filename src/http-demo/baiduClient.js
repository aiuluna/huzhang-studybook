import net from 'net'
import createFormater from './util/formater.js'

const formater = createFormater('request')
const req = {
	method: 'GET',
	url: 'https://www.baidu.com/',
	version: 'HTTP/1.1',
	headers: {
		'content-type': 'text/plain',
		accept: '*/*',
		'user-agent': 'curl/7.71.1',
	},
	body: '',
}
const reqBody = formater.format(req)

const client = net.connect(80, 'www.baidu.com', () => {
	console.log('connect to baidu server')
	client.write(reqBody)
})

client.on('data', (data) => {
	console.log(data.toString())
	client.end()
})
client.on('end', () => {
	console.log('disconnect from baidu server')
})

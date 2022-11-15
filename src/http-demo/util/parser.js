const createParser = (type) => {
	const httpMessage = {}

	const parse = (message) => {
		const msgs = message.split('\r\n')
		const head = msgs[0]
		const headers = msgs.slice(1, -2)
		const body = msgs[msgs.length - 1]
		parseHead(head)
		parseHeaders(headers)
		parseBody(body)
		return httpMessage
	}

	const parseHead = (msg) => {
		if (type === 'request') {
			const [method, url, version] = msg.split(' ')
			httpMessage.method = method
			httpMessage.url = url
			httpMessage.version = version
		} else {
            const [version, status, message] = msg.split(' ')
            httpMessage.version = version
            httpMessage.status = status
            httpMessage.message = message
        }
	}

	const parseHeaders = (headers) => {
		httpMessage.headers = {}
		for (let i = 0; i < headers.length; i++) {
			const header = headers[i]
			let [key, value] = header.split(': ')
			key = key.toLocaleLowerCase()
			value = value.trim()
			httpMessage.headers[key] = value
		}
	}

	const parseBody = (body) => {
		httpMessage.body = body
	}

	return { parse }
}

export default createParser

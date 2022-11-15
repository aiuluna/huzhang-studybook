const createFormater = (type) => {
	return {
		format(req) {
			const { method, url, version, body, status, message } = req
			const head =
				type === 'request'
					? `${method} ${url} ${version}\r\n`
					: `${version} ${status} ${message}\r\n`;

            let headers = '';        
			// headers['content-length'] = body.length
            
			for (let key in req.headers) {
				headers += `${key.toLocaleLowerCase()}: ${req.headers[key]}\r\n`
			}
            return `${head}${headers}\r\n${body}`

		},
	}
}

export default createFormater

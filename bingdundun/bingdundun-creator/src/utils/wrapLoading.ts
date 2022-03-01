const ora = require('ora')

const warpLoading = async function (fn, message, ...args) {
	const spinner = ora(message)
	spinner.start()

	try {
		const result = await fn(...args)
		spinner.succeed()
		return result
	} catch (error) {
		spinner.fail('Request failed, refetch ...')
	}
}

export default warpLoading

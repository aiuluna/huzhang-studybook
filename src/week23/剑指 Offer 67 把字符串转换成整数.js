/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
	const State = {
		STATE_INITIAL: 0,
		STATE_SIGN: 1,
		STATE_NUMBER: 2,
		STATE_END: 3,
	}
	const CharType = {
		CHAR_SPACE: 0,
		CHAR_SIGN: 1,
		CHAR_NUMBER: 2,
		CHAR_FAIL: 3,
	}
	const toCharType = (e) => {
		const s = e.charCodeAt('')
		if (s === ' '.charCodeAt('')) {
			return CharType.CHAR_SPACE
		} else if (s === '+'.charCodeAt('') || s === '-'.charCodeAt('')) {
			return CharType.CHAR_SIGN
		} else if (s >= '0'.charCodeAt('') && s <= '9'.charCodeAt('')) {
			return CharType.CHAR_NUMBER
		} else {
			return CharType.CHAR_FAIL
		}
	}

	const map = new Map([
		[
			State.STATE_INITIAL,
			new Map([
				[CharType.CHAR_SPACE, State.STATE_INITIAL],
				[CharType.CHAR_SIGN, State.STATE_SIGN],
				[CharType.CHAR_NUMBER, State.STATE_NUMBER],
				[CharType.CHAR_FAIL, State.STATE_END],
			]),
		],
		[
			State.STATE_SIGN,
			new Map([
				[CharType.CHAR_NUMBER, State.STATE_NUMBER],
				[CharType.CHAR_SPACE, State.STATE_END],
				[CharType.CHAR_SIGN, State.STATE_END],
				[CharType.CHAR_FAIL, State.STATE_END],
			]),
		],
		[
			State.STATE_NUMBER,
			new Map([
				[CharType.CHAR_NUMBER, State.STATE_NUMBER],
				[CharType.CHAR_SPACE, State.STATE_END],
				[CharType.CHAR_SIGN, State.STATE_END],
				[CharType.CHAR_FAIL, State.STATE_END],
			]),
		],
		[
			State.STATE_END,
			new Map([
				[CharType.CHAR_NUMBER, State.STATE_END],
				[CharType.CHAR_SPACE, State.STATE_END],
				[CharType.CHAR_SIGN, State.STATE_END],
				[CharType.CHAR_FAIL, State.STATE_END],
			]),
		],
	])

	const len = str.length
	let st = State.STATE_INITIAL
	let res = 0
	let sign = 1
	const MAX_INT = Math.pow(2, 31) - 1
	const MIN_INT = Math.pow(-2, 31)
	for (let i = 0; i < len; i++) {
		st = map.get(st).get(toCharType(str[i]))
		if (st === State.STATE_SIGN) {
			sign = str[i] === '+' ? 1 : -1
		} else if (st === State.STATE_NUMBER) {
			if (sign === 1) {
				res = Math.min(MAX_INT, res * 10 + +str[i])
			} else {
				res = Math.min(-MIN_INT, res * 10 + +str[i])
			}
		}
	}
	return sign * res
}

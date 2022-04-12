/**
 * @param {string} s
 * @return {boolean}
 *
 */
var isNumber = function (s) {
	const State = {
		STATE_INITIAL: 0,
		STATE_INT_SIGN: 1,
		STATE_INTEGER: 2,
		STATE_POINT: 3,
		STATE_POINT_WITHOUT_INT: 4,
		STATE_FRACTION: 5,
		STATE_EXP: 6,
		STATE_EXP_SIGN: 7,
		STATE_EXP_NUMBER: 8,
		STATE_END: 9,
	}

	const CharType = {
		CHAR_NUMBER: 0,
		CHAR_EXP: 1,
		CHAR_POINT: 2,
		CHAR_SIGN: 3,
		CHAR_SPACE: 4,
		CHAR_ILLEGAL: 5,
	}

	const toCharType = (e) => {
		const s = e.charCodeAt('')
		if (s >= '0'.charCodeAt('') && s <= '9'.charCodeAt('')) {
			return CharType.CHAR_NUMBER
		} else if (s === 'e'.charCodeAt('') || s === 'E'.charCodeAt('')) {
			return CharType.CHAR_EXP
		} else if (s === '-'.charCodeAt('') || s === '+'.charCodeAt('')) {
			return CharType.CHAR_SIGN
		} else if (s === '.'.charCodeAt('')) {
			return CharType.CHAR_POINT
		} else if (s === ' '.charCodeAt('')) {
			return CharType.CHAR_SPACE
		} else {
			return CharType.CHAR_ILLEGAL
		}
	}

	const map = new Map([
		[
			State.STATE_INITIAL,
			new Map([
				[CharType.CHAR_SPACE, State.STATE_INITIAL],
				[CharType.CHAR_SIGN, State.STATE_INT_SIGN],
				[CharType.CHAR_NUMBER, State.STATE_INTEGER],
				[CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT],
			]),
		],
		[
			State.STATE_INT_SIGN,
			new Map([
				[CharType.CHAR_NUMBER, State.STATE_INTEGER],
				[CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT],
			]),
		],
		[
			State.STATE_INTEGER,
			new Map([
				[CharType.CHAR_NUMBER, State.STATE_INTEGER],
				[CharType.CHAR_POINT, State.STATE_POINT],
				[CharType.CHAR_EXP, State.STATE_EXP],
				[CharType.CHAR_SPACE, State.STATE_END],
			]),
		],
		[
			State.STATE_POINT,
			new Map([
				[CharType.CHAR_NUMBER, State.STATE_FRACTION],
				[CharType.CHAR_EXP, State.STATE_EXP],
				[CharType.CHAR_SPACE, State.STATE_END],
			]),
		],
		[
			State.STATE_POINT_WITHOUT_INT,
			new Map([[CharType.CHAR_NUMBER, State.STATE_FRACTION]]),
		],
		[
			State.STATE_FRACTION,
			new Map([
				[CharType.CHAR_NUMBER, State.STATE_FRACTION],
				[CharType.CHAR_EXP, State.STATE_EXP],
				[CharType.CHAR_SPACE, State.STATE_END],
			]),
		],
		[
			State.STATE_EXP,
			new Map([
				[CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER],
				[CharType.CHAR_SIGN, State.STATE_EXP_SIGN],
			]),
		],
		[
			State.STATE_EXP_SIGN,
			new Map([[CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER]]),
		],
		[
			State.STATE_EXP_NUMBER,
			new Map([
				[CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER],
				[CharType.CHAR_SPACE, State.STATE_END],
			]),
		],
		[State.STATE_END, new Map([[CharType.CHAR_SPACE, State.STATE_END]])],
	])

	const len = s.length
	let st = State.STATE_INITIAL

	for (let i = 0; i < len; i++) {
		if (
			!map.get(st).has(toCharType(s[i])) ||
			toCharType(s[i]) === CharType.CHAR_ILLEGAL
		) {
			return false
		} else {
			st = map.get(st).get(toCharType(s[i]))
		}
	}
	return (
		st === State.STATE_INTEGER ||
		st === State.STATE_POINT ||
		st === State.STATE_FRACTION ||
		st === State.STATE_EXP_NUMBER ||
		st === State.STATE_END
	)
}

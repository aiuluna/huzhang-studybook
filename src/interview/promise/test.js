var queue = [
	new Promise((rs, rj) => {
		setTimeout(() => rs(1000), 1000)
	}),
	new Promise((rs, rj) => {
		setTimeout(() => rs(2000), 2000)
	}),
]

var p = Promise.race(queue).then((a) => {
    console.log(a);

    return Promise.race(queue).then(b => console.log(b))
})



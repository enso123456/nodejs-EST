function grab(flag) {

	var index = process.argv.indexOf(flag)

	return (index === -1) ? null : process.argv[index+1]
}

var name = grab('--name')

var greeting = grab('--greet')

if (!name || !greeting) {
	console.log('You are busted')
} else {
	console.log(`Welcome ${name}, ${greeting}`)
}


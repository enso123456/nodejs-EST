const duration = 3000
let currentTime = 0
const tick = 10
let percentage = 0

function showPercentage(p) {
	process.stdout.clearLine()
	process.stdout.cursorTo(0)
	process.stdout.write(`Loading ${p}%`)
}

const interval = setInterval(function() {
	currentTime += tick
	percentage = Math.floor((currentTime/duration) * 100)
	showPercentage(percentage)
}, tick)

setTimeout(function() {
	clearInterval(interval)
	showPercentage(100)
	console.log('\n\n done \n\n')
}, duration);

process.stdout.write('\n\n')

showPercentage(percentage)


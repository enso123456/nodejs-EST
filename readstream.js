var fs = require('fs')

var stream = fs.createReadStream('lorem.js')

var data = ""

stream.once('data', function() {
	console.log('\n\n')
	console.log('Reading File...')
	console.log('\n\n')
})

stream.on('data', function(chunk) {
	data += chunk
	console.log(data)
})

stream.on('end', function() {
	console.log('\n\n')
	console.log('Total file length = ' + data.length)
	console.log('\n\n')
})
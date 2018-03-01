var fs = require('fs')

if (fs.existsSync('app')) {
	console.log('Directory does exist')
} else {
	fs.mkdir('app', function(err, resp) {
		if (err) throw err

		console.log('Directory Created.')
	})
}


var fs = require('fs')
var path = require('path')

fs.readdir('./', 'UTF-8', function(err, files) {

	if (err) {
		throw err
	}

	// read file don't include .DS_Store
	files.forEach(function(fileName) {
		var file = path.join(__dirname, fileName)
		var stats = fs.statSync(file)

		if (stats.isFile() && fileName !== '.DS_Store') {

			fs.readFile(file, 'UTF-8', function(err, contents) {

				if (err) {
					throw err
				}

				console.log(contents)
			})
		}

	})

});

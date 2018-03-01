var fs = require('fs')
var path = require('path')
var readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var filePath = path.join(__dirname, 'lib', 'Person.js')

var newPath = path.join(__dirname, 'app', 'Person.js');


if (fs.existsSync(newPath)) {
	rl.question("Do you want to overwrite this ${newPath} ('y' for yes, 'n' for no.)", function(answer) {
		//Delete
		if (answer.toLowerCase().trim() === 'y') {
			fs.unlinkSync(newPath)
			copyFile()
		} else {
			process.exit()
		}
	});

} else {
	moveFile()
}

function moveFile() {
	fs.rename(filePath, newPath, function(err) {
	if (err) {
		console.log(err)
	}
		console.log(`${filePath} move to ${newPath}`)
	})
	process.exit()
}

// function copyFile() {
// 	fs.copyFile('./lib/Person.js', './app', function(err) {
// 		if (err) throw err

// 		var baseName = path.basename(__dirname)
// 		console.log(`${baseName} is copied`);
// 		process.exit()
// 	})
// }

// copyFile()

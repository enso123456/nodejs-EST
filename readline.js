const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require('fs');

const person = {
	name: '',
	hobbies: []
}

rl.question("What is your name? ", function(answer) {
	person.name = answer

	//create a file and insert a content	
	const stream = fs.createWriteStream(person.name + ".md");
	//need to writefile before appending other content
	// fs.writeFileSync(person.name + ".md", `${person.name}\n=======================\n\n`)

	stream.write(`${person.name}\n=======================\n\n`)

	rl.setPrompt("What is your hobby?")
	rl.prompt()
	
	rl.on('line', function(answer) {
		if (answer.toLowerCase().trim() === 'exit') {
			stream.close()
			rl.close()
		} else {
			person.hobbies.push(answer)
			stream.write(`* ${answer} \n`)
			// appending in the file
			// fs.appendFileSync(person.name + ".md", `* ${answer} \n`)
			rl.setPrompt("What is your hobby? (Type 'exit' to close)")
			rl.prompt()
		}
	})
})

rl.on('close', function() {
	console.log(`${person.name} your hobbies are the ff: ${person.hobbies}`)
})
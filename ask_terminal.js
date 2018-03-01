let questionnaire = [
	'First name: ',
	'Last name: ',
	'Country Code: ',
]

function ask(i) {
	process.stdout.write(questionnaire[i])
}

let answers = []

process.stdout.on('data', function(resp) {

	answers.push(resp.toString().trim())

	if (answers.length < questionnaire.length) {
		return ask(answers.length)
	} else{
		return process.exit(0)
	}
})

process.on('exit', function() {
	console.log(`Hi, ${answers[0]} ${answers[1]} from ${answers[2]}`)
})


ask(0)
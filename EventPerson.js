var Person = require('./lib/Person')

const romeo = new Person('Romeo')

romeo.on('speak', function(said) {
	console.log(`${this.name}: ${said}`)
});

romeo.emit('speak', 'Lazy monday morning!')
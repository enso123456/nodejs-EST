var events = require('events')

var myEvent = new events.EventEmitter();

myEvent.on('test', function() {
	console.log('checking...')
})

myEvent.emit('test')
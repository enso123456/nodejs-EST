var path = require('path')
var util = require('util')
var v8 = require('v8')

util.log(path.basename(__dirname))
util.log(path.join(__dirname, 'www', 'sites'))


util.log(v8.getHeapStatistics())

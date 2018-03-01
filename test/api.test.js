var assert = require('chai').assert
var expect = require('chai').expect

var add = require('../calculator').add

describe('starting my test', function() {
	
	let name
	let array
	let obj

	before(function() {
		name = "John Doe"
		array = [1,23,4,6]
		obj = { name, age: 24, hobbies: ['Basketball', 'Gym', 'Travelling'] }
	});

	after(function() {
	// runs after all tests in this block
	});
	
	describe('function', function() {
		
		it('add is a function', function() {
			assert.isFunction(add, 'This is a function')
		})

		it('add two numbers expect to be a 5', function() {
			expect(add(3, 2)).to.be.equal(5)
		})
	})

	describe('Object', function() {
		it('obj is a typeOf object', function() {
			assert.typeOf(obj, 'object')
		})

		it('checking have a key name', function() {
			assert.include(obj, { name })
		})

		it('checking have a key age is 24', function() {
			assert.include({ age: 24 }, { age: 24 })
		})

		it('checking hobbies', function() {
			assert.include(obj['hobbies'], 'Basketball', 'Gym', 'Travelling')
		})

		it('checking hobbies not included', function() {
			assert.notInclude(obj['hobbies'], 'Food Eating')
		})

		it('checking hobby is not empty', function() {
			assert.notEqual(obj['hobbies'].length, 0)
		})

		it('checking object is not empty', function() {
			assert.isNotEmpty(obj)
		})
	})

	describe('String', function() {
		it('name have a name ', function() {
			assert.isNotNull(name, 'My name is ' + name)
		})

		it('name is typeOf string', function() {
			assert.typeOf(name, 'string')
		})

	})

	describe('Array', function() {
		it('num is a typeOf array', function() {
			assert.typeOf(array, 'array')
		})

		it ('array length is not 0', function() {
			assert.strictEqual(array.length, 4)
		}) 
	})
});
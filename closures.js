// Create Hello World Function(Easy):
	let createHelloWorld = function() {
		return function(...args) {
				return "Hello World"
		}
	};

// Counter 01(Easy):
	let createCounter01 = function(n) {
		let count = 0;
		return function() {
			count += 1;
			if (count === 1) {
					return n;
			};
			return n + (count - 1);
		};
	};

//To Be Or Not To Be(Easy):
let expect = function(val) {
	return {
		toBe: function(value) {
			if (val === value) {
				return true
			}
				throw new Error('Not Equal')
		},
		notToBe: function(value) {
			if (val !== value) {
				return true
			}
			throw new Error('Equal')
		}
	}	
};

//Counter 02(Easy): 
let createCounter02 = function(init) {
	let counter = init;
	return {
		increment: function() {
			counter += 1;
			return counter;
		},
		decrement: function() {
			counter -=1;
			return counter;
		},
		reset: function() {
			counter = init;
			return counter;
		}
	}
};
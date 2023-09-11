// Create Hello World Function(Easy):
	let createHelloWorld = function() {
		return function(...args) {
				return "Hello World"
		}
	};

// Counter(Easy):
	let createCounter = function(n) {
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
var expect = function(val) {
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
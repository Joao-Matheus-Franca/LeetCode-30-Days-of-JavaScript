// Create Hello World Function:
  // Write a function createHelloWorld.
	// It should return a new function that always returns "Hello World".

		let createHelloWorld = function() {
				return function(...args) {
						return "Hello World"
				}
		};

// Counter:
	// Given an integer n, return a counter function. 
	// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

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

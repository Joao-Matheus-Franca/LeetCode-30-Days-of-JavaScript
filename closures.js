// Create Hello World Function:
	let createHelloWorld = function() {
		return function(...args) {
				return "Hello World"
		}
	};

// Counter:
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

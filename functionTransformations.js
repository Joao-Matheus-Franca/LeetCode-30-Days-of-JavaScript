// Function Composition(Easy):
    let compose = function(functions) {
        return function(x) {
            let value = x;
            for(let i = functions.length - 1; i >= 0; i -= 1) {
                value = functions[i](value);
            };
            return value;
        };
    };

// Return Length of Arguments Passed(Easy):
    let argumentsLength = function(...args) {
        let count = 0;
        args.forEach((a) => count += 1);
        return count;
    };

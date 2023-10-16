//Apply Transform Over Each Element in Array(Easy):
let map = function(arr, fn) {
    let newArray = [];
    for(let i = 0; i < arr.length; i += 1) {
        newArray.push(fn(arr[i], i));
    };
    return newArray;
};

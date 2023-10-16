//Apply Transform Over Each Element in Array(Easy):
let map = function(arr, fn) {
    let newArray = [];
    for(let i = 0; i < arr.length; i += 1) {
        newArray.push(fn(arr[i], i));
    };
    return newArray;
};

//Filter Elements from Array(Easy):
let filter = function(arr, fn) {
    let newArray = [];
    for(let i = 0; i < arr.length; i += 1) {
        if(fn(arr[i], i)) {
            newArray.push(arr[i])
            };
    };
    return newArray;
 };

//Array Reduce Transformation(Easy):
let reduce = function(nums, fn, init) {
    acc = init;  
    for(let i = 0; i < nums.length; i += 1) {
        acc = fn(acc, nums[i]);
    };
    return acc;
};

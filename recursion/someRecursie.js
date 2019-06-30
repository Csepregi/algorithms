function someRecursive(arr, callback){
    if(arr.length === 1) return cb(arr[0]);
    if(cb(arr.pop())) return true
 
    return someRecursive(arr, cb);
}

const isOdd = value => value % 2 !== 0;

console.log(someRecursive([1,2,3,4,5], isOdd));
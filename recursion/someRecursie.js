function someRecursive(arr, callback){
    if(arr.length === 0) return false;
    if(callback(arr[0])) return true;
    return someRecursive(arr.slice(-1), callback)
}

const isOdd = value => value % 2 !== 0;

console.log(someRecursive([1,2,3,4,5], isOdd));
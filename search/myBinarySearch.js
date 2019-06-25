function binarySearh(arr, num){
    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== num && start < end){
        if(arr[middle] > num){
            end = middle -1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === num){
        return middle;
    }
    else{
        return -1;
    }
   
}

var primes = [2, 3, 5, 7];

console.log(binarySearh(primes, 3));
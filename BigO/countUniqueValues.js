//write a function which takes in an array and count how many unique values are there

function countUnique(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

console.log(countUnique([1,1,1,1,3,4,5,6]));
function flatten(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
         result = result.concat(flatten(arr[i]));
    }
    return result;
    
    
}

console.log(flatten([1,2,3,4[5,6,7]]));
// function uniqueValues(arr){
//     if(arr.length < 1) return 0;
//     let i = 0;
//     for(let j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j];
//         } 
//     }
//     return i + 1;
// }


// console.log(uniqueValues([1,2,3,3,3,5,5,5]));

function uniqueValues(arr){
    let counter = 1;
    if(arr.length < 0) return 0;
    let j = 1;
    let current = arr[0];
    while(j < arr.length){
        if(arr[j] !== current){
            counter++;
            current = arr[j];
        }
        j++;
    }
    return counter;
}


console.log(uniqueValues([1,2,3,3,3,5,5,5, 6, 6, 6,6]));
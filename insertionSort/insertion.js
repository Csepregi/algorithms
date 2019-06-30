function insertion(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(let j = arr.length; j >= 0 && arr[j] > currentVal; j--){
            arr[j-1] = arr[j];
            }
            arr[j+1] = currentVal;
        }
        return arr;
    }
    

console.log(insertion([2,1,4,3,6,5,8,7]));
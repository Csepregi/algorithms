function reverse(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let currentIndex = arr[i];
        if(isNaN(arr[i])){
            arr[i+1] = arr[i];
        }
        arr[i+1] = currentIndex;
   }
   return arr;
}

console.log(reverse([5,3,'*',2,'+']));
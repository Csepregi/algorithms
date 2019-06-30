function bubbleSort(arr){
    if(arr.length < 1) return arr;
    let noSwap;
    for(let i = arr.length; i > 0; i--){
        noSwap = true;
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

//console.log(bubbleSort([4,5,3,2,8,1,6]));

function countSwaps(a) {
    if (a.length <= 1) return arr;
    let swapNumber = 0;
    let noSwap;
    for (var i = a.length; i > 0; i--){
        noSwap = true;
        for (var j = 0; j < i - 1; j++){
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp; 
                noSwap = false;
                swapNumber++;
            }
        }
        if(noSwap) break;
    }
    return `Array is sorted in ${swapNumber} swaps First Element: ${a[0]} Last Element: ${a.pop()}` 
}

console.log(countSwaps([1,2,3]));

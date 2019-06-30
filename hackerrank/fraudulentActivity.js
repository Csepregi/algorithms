function frauduActivity(arr, n){
    let i = 0;
    let j = i + 1;
    let avg = 0;
    while(i <= arr.length){
        avg += arr[i - n] / 2;
        i++;
    }
    return avg;
}
    


console.log(frauduActivity([2,3,5,6,4,3,9],3));
function sumZero(arr){
    let right = arr.length - 1;
    let left = 0;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-2, 0, 2, 3]));
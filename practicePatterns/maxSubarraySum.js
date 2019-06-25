function maxSubArraySum(arr, number){
    if(arr.length > number) return null;
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < number; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum
    for(let j = number; j < arr.length; j++){
        tempSum = tempSum - arr[j - number] + arr[j];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([2,3,4,5], 2));
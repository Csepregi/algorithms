//write a function which take an array and a number
// return the max sum number that are next to other, the other parameter number say how many. 


function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }

function averagePair(arr, avg){
    let avgarr = [];

    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        let tempavg = (arr[i + 1] + arr[i]) / 2;
        avgarr.push(tempavg);
      }
      for(let i = 0; i < avgarr.length; i++){
        if(avgarr[i] === avg) return true  
        } return false;
}

console.log(averagePair([1,2,4,6,8], 5));
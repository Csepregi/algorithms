function getDigit(number, n){
    return Math.floor(Math.abs(number) / Math.pow(10, n)) % 10;
}

function numDigits(num) {
    if(num === 0) return 1;
    return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
  }

 function mostDigits(numbers){
    let maxDigit = 0;
    for(let i = 0; i < numbers.length; i++){
        maxDigit = Math.max(maxDigit, numDigits(numbers[i]));     
    }
    return maxDigit;
 } 

 function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
 }

console.log(radixSort([2345, 24444, 33]));
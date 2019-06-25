//input array and number, back min len of the array which gives back a  number which is greater or equal
//as the parameter number, numbers has to be next to each other, if nothing than give back 0;

function minSubArrayLen(arr, number){
    let numbersLength = [];
    let sumNumber = 0;
    let i = 0;
    while(i < arr.length){
        if(sumNumber < number){
            numbersLength.push(arr[i]);
            sumNumber += arr[i];
            i++;
        }
        if(sumNumber === number) return numbersLength.length;
       
    } return 0;
    
    
}

console.log(minSubArrayLen([1,2,4,5,6], 7));
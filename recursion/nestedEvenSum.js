function nestedEvenSum(obj, sum=0){
    for (var key in obj) {
        console.log(obj[key])
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}


const fruits = {
    apple: 1,
    orange: 3,
    pear: 54, 
    party: {
        italy: 2,
        netherland: 6
    }
  }

console.log(nestedEvenSum(fruits));
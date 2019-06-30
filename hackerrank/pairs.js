//how many pairs there are


function sockMerchant(n, ar) {
    let result = {};
    let count = 0;
    for (let i of ar){
        result[i] = ++result[i] || 1;
    }
    console.log(result);
    for(let i in result){
        let pair = parseInt(result[i] / 2);
        if(pair >= 1) count += pair;
    }
    return count;
   
}

console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]));
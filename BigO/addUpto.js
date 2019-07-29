function addUpto(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
//console.log(addUpto(6));

function smallerAddUpto(n){
    return n*(n + 1)/2;
}
//console.log(smallerAddUpto(6));

function printAllPairs(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i, j);
        }
    }
}
//printAllPairs(6);
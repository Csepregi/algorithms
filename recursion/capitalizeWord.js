function capitalizeWords(arr){
    if(arr.length < 1) return [];
    let res = capitalizeWords(arr.slice(0, -1));
    res.push(arr.slice(-1)[0].toUpperCase());
    //res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
}

console.log(capitalizeWords(['hello', 'cioa', 'bello']));
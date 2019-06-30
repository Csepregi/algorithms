function repeatedString(s, n){
    let result = {};
    s = s.repeat(n);
    s = s.slice(0, n+1);
    for (let i of s){
        if(i === 'a'){

        result[i] = ++result[i] || 1;
        }
    }
    
    return parseInt(Object.values(result));
}

console.log(repeatedString("aba", 10));
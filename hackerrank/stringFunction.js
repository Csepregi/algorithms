function isValid(s){
    let result = {};
    let numbers = [];
    let counter = 0;
    for(let i of s){
        // if(result[char] > 0){
        //     result[char]++
        // } else {
        //     result[char] = 1;
        // }
        result[i] = (result[i] || 0) + 1;
    }
    Object.values(result).forEach((value) => {
        numbers.push(value);
    });
    for(let i = 0; i < numbers.length-1; i++){
        if(numbers[i] != numbers[i+1]){
            counter +=1;
        }
    }
    if(counter > 2){
        return "NO";
    }
    return "YES";
}

console.log(isValid("aabbcd"));
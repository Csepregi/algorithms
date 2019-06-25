//write a function which get a string and get back the numbers of each char

function charCount(string){
    let result = {};
    for(let char of string){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            result[char] = ++result[char] || 1;
        }      
    }
    return result;
}

console.log(charCount("hello"));
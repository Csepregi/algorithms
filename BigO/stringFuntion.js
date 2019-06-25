//return a function which takes in a string and return the count for each caracter




function charCount(string) {
    // make an object to give it back at the end
    // loop over the string forEach character
        // if char/number not in object add in with 1
        // if char/number is a  key add count with  1
        // if char is sg else (space, special, etc ) dont do anything
    // give back the object
//     let result = {};
//     for(let i = 0; i <= string.length - 1; i++){
//         let char = string[i].toLowerCase();
//         if(result[char] > 0){
//             result[char]++
//         } else {
//             result[char] = 1;
//         }
//     }

//     return result;
//   }
let result = {};
    for(let char of string){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(result[char] > 0){
                result[char]++
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
  }


console.log(charCount("HAnnah"));
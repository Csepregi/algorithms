//write a function which takes two strings and check the first string letter occur also in the second
// eg: hello, uhiello  without there order changing => true

function isSubsequence(str1, str2){
   let i = 0;
   let j = 0;
   while(j < str2.length){
       if(str1[i] === str2[j]) i++
       if(i === str1.length) return true;
       j++
   }
   return false;
    }


console.log(isSubsequence("hello", "hllouh"));
// if(arr.length === 0) return 0;
//     let i = 0;
//     for(let j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;





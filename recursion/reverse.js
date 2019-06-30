//  function reverse(str){
//     if(str.length <= 1) return str;
//     //let s = str.slice(0, -1);
//     return reverse(str.slice(1)) + str[0];
//     //reversed.join(s);
    
// }
function reverse(str){
    if(str.length <= 1) return str;
    //let s = str.slice(0, -1);
    console.log(str.slice(1));
    console.log(str[0]);
    return reverse(str.slice(1)) + str[0]
    
}


console.log(reverse("hello"));
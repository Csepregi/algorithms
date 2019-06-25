 function reverse(str){
    if(str.length <= 1) return str;
    //let s = str.slice(0, -1);
    return reverse(str.slice(1)) + str[0];
    //reversed.join(s);
    
}


console.log(reverse("hello"));
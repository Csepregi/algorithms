function areThereDuplicates(...args){
    let result = {}
    for(let i of args){
        //firstObj[i] = (firstObj[i] || 0) + 1
        result[i] = ++result[i] || 1;
    }
    //const values = Object.values(result);
    for(let i in result){
        console.log(result[i]);
        if(result[i] > 1) return true
      }
      return false;
    
}
//console.log(areThereDuplicates(1,2,1,5));

function areThereDuplicatesPointer(...args){
    let pointer1 = 0;
    let pointer2 = 1;
    args.sort((a,b) => a > b);
    while(pointer2 < args.length){
        if(args[pointer1] === args[pointer2]){
            return true;
           
        } else{
            pointer1++;
            pointer2++;
        }
        return false;
    } 
}


console.log(areThereDuplicatesPointer(1,2,1,5));


function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }
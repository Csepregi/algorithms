function codingFriends(erica, bob){
    const name = erica;
    const map = Array.prototype.map;
    let res = 0;
    let ericaMap = [];

const newName = map.call(name, eachLetter => {
    
    if(eachLetter === 'E'){
         ericaMap.push(1)
    }
    if(eachLetter === 'H'){
        ericaMap.push(5);
    }
    if(eachLetter === 'M'){
         ericaMap.push(3);
    }
    for(let v of ericaMap){
        res += v;
    }
    return res;
    
})

console.log(newName) // ["Ca", "ha", "ua", "la", "oa", "oa"]
}
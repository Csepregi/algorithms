function sameFrequency (int1, int2){
    let counter1 = 0;
    let counter2 = 0;
    let strint1 = int1.toString();
    let strint2 = int2.toString();
    for(let i = 0; i < strint1.length; i++){
        counter1 += 1;
    }
    for(let i = 0; i < strint2.length; i++){
        counter2 += 1;
    }
    if(counter1 !== counter2){
        return false;
    } else {
        return true;
    }
}

console.log(sameFrequency(23243, 2334));
// how many valeys there are (0)

function countValley(num, str){
    let isInValley = false;
    str = str.split("");
    str = str.map(steps => ((steps === "U") ? 1 : -1));
    let valleys = 0;
    let count = 0;
    for(let i in str){
        count += str[i];
        if (count < 0 && !isInValley) {

            // to check that we're not already in a valley 
            // start of a valley
            isInValley = true; 
       }
       if (count == 0 && isInValley) {
            // to check if we're just coming out of a valley
            // end of valley, increase count
            valleys++; // increase count
            isInValley = false; // reset isInValley
       }    
    }
    return valleys;
}


console.log(countValley(8, 'DDUUDDUDUUUD'))


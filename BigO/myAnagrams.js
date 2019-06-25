//given two strings , one prove that one is from the other, meaning that the letters are the same
// just different order, number of occurencies should be the same. 

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let firstObj = {};
    let secondObj = {};
    for(let i of str1){
        //firstObj[i] = (firstObj[i] || 0) + 1
        firstObj[i] = ++firstObj[i] || 1;
    }
    for(let j of str2){
        secondObj[j] = (secondObj[j] || 0) + 1
        }
    console.log(firstObj);
    console.log(secondObj);
    for(let key in firstObj){
        if(!(key in secondObj)){
            return false
        }
        if(secondObj[key] !== firstObj[key]){
            return false
        }
    }
    return true
    }


console.log(validAnagram("hello", "helol"));
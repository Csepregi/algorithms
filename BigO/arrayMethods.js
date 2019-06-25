//naiv solution
// compare two arrays, one should be the other square numbered , same length;
// eg: [1,2,4] => [16, 4, 1] order not important. 

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1){
            return false;
        } else {
            arr2.splice(correctIndex);
        }
        return true;
    }
}

console.log(same([1,2,4], [16,1]));
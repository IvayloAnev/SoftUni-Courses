function solve(arr){
    let array = arr;
    let arraylL = array.length;
    let newArr = [];
    
    for( i = 0 ; i < arraylL ; i++){
    let currNum = array[i];
    let maxNumArra = getMaxOfArray(arr);
    if ( currNum == maxNumArra){
        newArr.push(currNum);
    }

} 
console.log(newArr.join(` `));
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
}

solve([14, 24, 3, 19, 15, 17])

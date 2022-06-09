function solve(arr) {
    let arrOfnumbers = arr.map(Number)
    let length = arrOfnumbers.length
    let maxNum = 0 ;
    let newArr = []
    for (let i = 0 ; i < length ; i++){
        let curNum = arrOfnumbers.shift();
        if ( curNum > maxNum){
            maxNum = curNum
        }
        newArr.push(maxNum)

     
}
console.log(newArr)
}
solve([14, 24, 3, 19, 15, 17]);


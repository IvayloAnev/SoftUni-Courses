function solve(arr){
    let arrOfNumbers = arr;
    let newArr = [];
    let length = arrOfNumbers.length;
    let sumArr = 0;
    let sumNewArr = 0;


    for (let i = 0 ; i < length ; i++){
        let currNumber = arrOfNumbers[i];
        sumArr += currNumber;
        let newNumber = 0;
        if ( currNumber % 2 === 0 ){
          newNumber = currNumber + i;
        }else{
          newNumber = currNumber - i;
        }
        newArr.push(newNumber);
        sumNewArr += newNumber; 
       

    }
    console.log(newArr);
    console.log(sumArr);
    console.log(sumNewArr);
}
solve([5, 15, 23, 56, 35])
solve([-5, 11, 3, 0, 2])

//100/100;
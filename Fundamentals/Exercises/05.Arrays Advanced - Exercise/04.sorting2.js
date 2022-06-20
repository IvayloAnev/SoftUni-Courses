function sorting(array){
    let arrayCopy = array.slice()
    arrayCopy.sort((a,b) => b - a);
    
    let newArray = [];
    // while(array.length > 0){
    // let biggerNum = array.shift();
    // newArray.push(biggerNum);
    // let smallerNum = array.pop();
    // newArray.push(smallerNum);
    for (let i=0 ; i < array.length ; i++){
        let biggerNum = arrayCopy.shift();
        newArray.push(biggerNum);
        let smallerNum = arrayCopy.pop();
        newArray.push(smallerNum);
    }
    
    console.log(newArray.join(" "));
    }

    sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
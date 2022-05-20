function solve(array){
    let initialEnergy = Number(array.shift())
    isEnded = array.includes("End of battle")
    let counter = 0 ;
    i = 0 ;
    while ( array[i] !== "End of battle"){
        let currElement = Number(array[i]) 
       if(initialEnergy >= currElement){
        initialEnergy -= currElement
        counter++   
        if ( counter % 3 === 0 ){
            initialEnergy += counter
        }
     }else{
            isEnded = false
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${initialEnergy} energy`)
            break;
        }
        i++ 
    }
    if(isEnded){
        console.log(`Won battles: ${counter}. Energy left: ${initialEnergy}`)
    }
}
solve(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
console.log('.............')
solve(["80", "54", "14", "28", "13", "End of battle"]);
console.log('.............')
solve(["200", "54", "14", "28", "13", "End of battle"]);
solve(["100", "10", "10", "10", "1", "2", "3", "72", "10"])
solve(["1", "10", "10", "10", "1", "2", "3", "73", "End of battle"]);

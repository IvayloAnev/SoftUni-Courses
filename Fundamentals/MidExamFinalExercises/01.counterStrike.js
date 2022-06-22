function solve(input){
    let energy = Number(input.shift())
    let wonBattles = 0
    isEnded = input.includes("End of battle")
   
    while(input[0]!= "End of battle"){
        let distance = Number(input.shift())
        
        if(energy>=distance){
            energy -= distance
            wonBattles++
            if(wonBattles%3===0){
                energy+=wonBattles
            }
        }else{
            isEnded = false
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`)
            break;
        }
    }
    if(isEnded){
    console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`)
    }
}
solve(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
console.log(".........")
solve(["200", "54", "14", "28", "13", "End of battle"]);
//100/100
function shopping(input) {  
    const budget = Number(input[0]);
    const countVodeoCards = Number(input[1]);
    const countProcesors = Number(input[2]);
    const countRamMemories = Number(input[3]);
    const priceOneVideocard = 250;
    const costVideocards = priceOneVideocard * countVodeoCards;
    const priceOneProcesor = 0.35 * costVideocards;
    const costProcesors = priceOneProcesor * countProcesors;
    const priceOneRamMemory = 0.1 * costVideocards;
    const costRamMemories = priceOneRamMemory * countRamMemories;
    let totalCost = costVideocards + costProcesors + costRamMemories;
    if ( countVodeoCards > countProcesors) {
        totalCost *= 0.85 }
    const diffrence = Math.abs(budget - totalCost);
    if (budget >= totalCost){
        console.log(`You have ${diffrence.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diffrence.toFixed(2)} leva more!`);
    }
    }  

shopping(["900","2","1","3"]);
shopping(["920.45","3","1","1"])
//100/100

function harvest(input){
    const sqtMetersYard = Number(input[0]);
    const grapePerSqrMeter = Number(input[1]);
    const neededLitersWine = Number(input[2]);
    const countWorkers = Number(input[3]);
    const neededGrapeForOneLiterWine = 2.5 ;
    let totalKgsGrape = sqtMetersYard * grapePerSqrMeter ;  
    totalKgsGrape *= 0.4;
    const totalLiters = totalKgsGrape / 2.5;
    const difference = Math.abs(totalLiters - neededLitersWine);
    if ( totalLiters < neededLitersWine ) {
    console.log(`It will be a tough winter! More ${ Math.floor(difference) } liters wine needed. `)
    } else {
    const winePerPerson = (totalLiters-neededLitersWine) / countWorkers;
    console.log(`Good harvest this year! Total wine: ${Math.floor(totalLiters)} liters.`)
    console.log(`${Math.ceil(difference )} liters left -> ${ Math.ceil(winePerPerson) } liters per person.`)
    }
    }
    harvest(["650","2","175","3"]);
    harvest([1020,1.5,425,4]);
    //100/100;
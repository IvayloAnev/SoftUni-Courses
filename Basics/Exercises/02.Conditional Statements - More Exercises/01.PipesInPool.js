function pipesInPool(input){
    const vPoolVolume = Number(input[0]);
    const p1DebitFirstPipe = Number(input[1]);
    const p2DebitSecondPipe = Number(input[2]);
    const hHours = Number(input[3]);
    const litersFirstPipe =  p1DebitFirstPipe * hHours;
    const litersSecondPipe = p2DebitSecondPipe * hHours;
    const totalLiters = litersFirstPipe + litersSecondPipe;
    const precentageFirstPipe = (litersFirstPipe / totalLiters * 100).toFixed(2);
    const precentageSecondPipe = (litersSecondPipe / totalLiters * 100).toFixed(2);
    if ( totalLiters <= vPoolVolume ) {
    const precentageFull = (totalLiters / vPoolVolume * 100).toFixed(2);
    console.log(`The pool is ${ precentageFull }% full. Pipe 1: ${precentageFirstPipe}%. Pipe 2: ${precentageSecondPipe}%.`)
    } else {
    const difrence = (totalLiters - vPoolVolume).toFixed(2) ;
    console.log(`For ${ hHours } hours the pool overflows with ${ difrence } liters.`)
    }
    }
    pipesInPool(["1000","100","120","3"]);
    pipesInPool(["100","100","100","2.5"]);

    //100/100
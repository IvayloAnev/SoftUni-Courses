function GodzhillaVSKong(input) {
    const movieBudget = Number(input[0]);
    const amountStunters = Number(input[1]);
    const priceClothesOneStunter = Number(input[2]);
    const decorMovieCost = movieBudget * 0.1;
    let costClothesAllStunters = amountStunters * priceClothesOneStunter;
    if ( amountStunters  > 150) {
    costClothesAllStunters *= 0.9;
    }
    const totalCost = decorMovieCost + costClothesAllStunters;
    const difference = Math.abs( totalCost - movieBudget);
    if ( totalCost > movieBudget ) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${ difference.toFixed(2) } leva more.`);
    } else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${ difference.toFixed(2) } leva left.`)
    }
    }
    GodzhillaVSKong(["20000","120","55.5"]);
    GodzhillaVSKong(["15437.62","186","57.99"]);
    GodzhillaVSKong(["9587.88","222","55.68"]);

    //100/100;

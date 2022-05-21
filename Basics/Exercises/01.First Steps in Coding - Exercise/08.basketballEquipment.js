function basketballEquipment(input) {

    const taxPerYear = Number(input[0]);
    const trainersPrice = taxPerYear - taxPerYear * 0.4;
    const suitPrice = trainersPrice - trainersPrice * 0.2;
    const ballPrice = suitPrice / 4;
    const accPrice = ballPrice / 5;
    const totalCosts = trainersPrice + suitPrice + ballPrice + accPrice + taxPerYear;
    console.log(totalCosts);
    }

    basketballEquipment(["365"]);


function transportPrice(input) {
    const startPriceTaxi = 0.7;
    const taxiPricePerKmDay = 0.79;
    const taxiPricePerKmNight = 0.90;
    const priceBusPerKm = 0.09; 
    const priceTrainPerKM = 0.06;
    const kilometers = Number(input[0]);
    let dayOrNight = input[1];
    const taxiPriceDay = 
    (kilometers * taxiPricePerKmDay + startPriceTaxi).toFixed(2);
    const taxiPriceNight = 
    (kilometers * taxiPricePerKmNight + startPriceTaxi).toFixed(2);
    const busPrice = (kilometers * priceBusPerKm).toFixed(2) ;
    if (kilometers < 20 ) {
    if ( dayOrNight == "day"){
    console.log(taxiPriceDay);
    } else {
    console.log(taxiPriceNight);
    }
    }
    if (kilometers < 100){
    if(kilometers >= 20){
    console.log(busPrice); 
    }
    }
    if (kilometers >= 100 ) {
    const trainPrice = (kilometers * priceTrainPerKM).toFixed(2);
    console.log(trainPrice);
    } 
    }
    transportPrice([5,"day"]);
    transportPrice([7,"night"]);
    transportPrice([25,"day"]);
    transportPrice([180,"night"]);
    //100/100
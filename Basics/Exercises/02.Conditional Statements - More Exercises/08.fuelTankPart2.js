function fuelTank2(input){
    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93 ;
    const typeFuel = input[0];
    const amountFuel =Number(input[1]);
    const clubCard = input[2];
    let totalBill = 0;

    if ( clubCard === `Yes`) {
         gasolinePrice -=0.18;
         dieselPrice -=0.12;
         gasPrice -=0.08;
         switch(typeFuel) {
            case `Diesel`: totalBill = dieselPrice * amountFuel ; break; 
            case `Gasoline`: totalBill = gasolinePrice * amountFuel ; break;
            case `Gas`: totalBill = gasPrice  * amountFuel ; break;
            default : ('');break;   
        }
    } else {
        switch(typeFuel) {
            case `Diesel`: totalBill = dieselPrice * amountFuel ; break; 
            case `Gasoline`: totalBill = gasolinePrice * amountFuel ; break;
            case `Gas`: totalBill = gasPrice  * amountFuel ; break;
            default : ('');break;
    }
}
if ( (amountFuel >= 20) && (amountFuel <= 25)){
    totalBill  *=0.92;
    } else  if ( amountFuel > 25){
    totalBill  *= 0.90;
}   
    console.log(`${totalBill.toFixed(2)} lv.`);
}



fuelTank2([`Gas`,30,`Yes`]);
fuelTank2([`Gasoline`,25,`No`]);
fuelTank2([`Diesel`,19,`No`]);
//100/100
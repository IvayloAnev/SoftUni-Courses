function fuelTank(input){
    const fuelType = input[0];
    const fuelLiters = Number(input[1]);
    if (fuelLiters < 25 ) {
       switch(fuelType){
            case "Diesel":console.log(`Fill your tank with ${"diesel"}!`);break;
            case "Gasoline":console.log(`Fill your tank with ${"gasoline"}!`);break;
            case "Gas":console.log(`Fill your tank with ${"gas"}!`);break;
            default : console.log(`Invalid fuel!`);break
           }
       } else {
            switch(fuelType){
            case "Diesel":console.log(`You have enough ${"diesel"}.`);break;
            case "Gasoline":console.log(`You have enough ${"gasoline"}.`);break;
            case "Gas":console.log(`You have enough ${"gas"}.`);break;
            default : console.log(`Invalid fuel!`);break;
        }
       }
    }
    fuelTank([`Diesel`,10]);
    fuelTank([`Gasoline`,40]);
    fuelTank([`Gas`,25]);
    fuelTank([`Kerosene`,200]);
    //100/100;
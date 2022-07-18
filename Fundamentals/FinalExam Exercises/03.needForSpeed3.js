function solve(input) {
  let num = input.shift();
  let cars = {};
  for (let i = 1; i <= num; i++) {
    let cardData = input.shift().split("|");
    let name = cardData[0].trim();
    let mlg = Number(cardData[1]);
    let fuel = Number(cardData[2]);
    cars[name] = {
      mlg,
      fuel,
    };
  }
  while (input[0] != "Stop") {
    let info = input.shift().split(":");
    let command = info[0].trim();
    let name = info[1].trim();
    let car = cars[name];

    if (command == "Drive") {
      let distance = Number(info[2]);
      let neededFuel = Number(info[3]);
      if (car.fuel < neededFuel) {
        console.log(`Not enough fuel to make that ride`);
      } else {
        car.fuel -= neededFuel;
        car.mlg += distance;
        console.log(
          `${name} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`
        );
        if (car.mlg >= 100000) {
          console.log(`Time to sell the ${name}!`);
          delete cars[name];
        }
      }
    } else if (command == "Refuel") {
      let addedFuel = Number(info[2]);
      let possibleToAdd = Math.min(75 - car.fuel, addedFuel);
      car.fuel += possibleToAdd;
      console.log(`${name} refueled with ${possibleToAdd} liters`);
    } else if (command == "Revert") {
      kms = Number(info[2]);
      car.mlg -= kms;

      if (car.mlg < 10000) {
        car.mlg = 10000;
      } else {
        console.log(`${name} mileage decreased by ${kms} kilometers`);
      }
    }
  }
  for (let car in cars) {
    console.log(
      `${car} -> Mileage: ${cars[car].mlg} kms, Fuel in the tank: ${cars[car].fuel} lt.`
    );
  }
}
solve([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
console.log("........");
solve([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
//100/100
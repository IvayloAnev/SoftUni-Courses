function solve(input) {
  let num = input.shift();
  let plants = {};
  let avg = 0;
  for (let i = 1; i <= num; i++) {
    let plantsData = input.shift().split("<->");
    let name = plantsData[0].trim();
    let rarity = Number(plantsData[1]);
    let raiting = [];
    plants[name] = {
      rarity,
      raiting,
    };
  }
  while (input[0] != "Exhibition") {
    let tokens = input.shift().split(":");
    let command = tokens[0];
    let plantsData = tokens[1].split(" - ");
    let name = plantsData[0].trim();
    let plant = plants[name];

    if (command === "Rate") {
      if (plants.hasOwnProperty(name)) {
        let value = Number(plantsData[1]);
        plant.raiting.push(value);
      } else {
        console.log(`error`);
      }
    } else if (command === "Update") {
      if (plants.hasOwnProperty(name)) {
        let newRarity = Number(plantsData[1]);
        plant.rarity = newRarity;
      } else {
        console.log(`error`);
      }
    } else if (command === "Reset") {
      if (plants.hasOwnProperty(name)) {
        plant.raiting = [0];
      } else {
        console.log(`error`);
      }
    }
  }

  console.log(`Plants for the exhibition:`);
  for (let plant in plants) {
    let arr = plants[plant].raiting;
    if (arr.length === 0) {
      arr = [0];
    }
    //console.log(arr);
    //console.log(plant);
    let sum = 0;
    for (let el of arr) {
      sum += el;
    }
    avg = sum / arr.length;

    console.log(
      `- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avg.toFixed(2)}`
    );
  }
  //console.table(plants)
}
solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
console.log("..............");
solve([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
//87/100

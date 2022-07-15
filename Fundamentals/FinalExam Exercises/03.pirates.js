function solve(input) {
  let cities = {};
  let name = "";

  while (input[0] != "Sail") {
    let tokens = input.shift().split("||");
    name = tokens[0];
    let population = Number(tokens[1]);
    let gold = Number(tokens[2]);

    if (!cities.hasOwnProperty(name)) {
      cities[name] = {
        population,
        gold,
      };
    } else {
      cities[name].population += population;
      cities[name].gold += gold;
    }
  }
  input.shift();

  while (input[0] != "End") {
    let tokens = input.shift().split("=>");
    let command = tokens[0];

    if (command == "Plunder") {
      let attackedCity = tokens[1];
      let killedPeople = Number(tokens[2]);
      let stolenGold = Number(tokens[3]);
      console.log(
        `${attackedCity} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`
      );
      cities[attackedCity].population -= killedPeople;
      cities[attackedCity].gold -= stolenGold;
      if (
        cities[attackedCity].population <= 0 ||
        cities[attackedCity].gold <= 0
      ) {
        console.log(`${attackedCity} has been wiped off the map!`);
        delete cities[attackedCity];
      }
    } else {
      let town = tokens[1];
      let earnedGold = Number(tokens[2]);
      if (earnedGold < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        cities[town].gold += earnedGold;
        console.log(
          `${earnedGold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`
        );
      }
    }
  }

  if (Object.entries(cities).length != 0) {
    console.log(
      `Ahoy, Captain! There are ${
        Object.keys(cities).length
      } wealthy settlements to go to:`
    );
    for (let city in cities) {
      console.log(
        `${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}
solve([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
console.log(".............");
solve([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
//100/100
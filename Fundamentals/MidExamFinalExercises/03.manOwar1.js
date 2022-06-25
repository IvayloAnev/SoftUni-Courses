function solve(input) {
  let pirateShip = input.shift().split(">").map(Number);
  let warShip = input.shift().split(">").map(Number);
  let maxHC = Number(input.shift());
  let checkMaxHC = maxHC * 0.2;
  let isFinished = true;
  while (input[0] != "Retire") {
    let tokens = input.shift().split(" ");
    let command = tokens[0];
    let counter = 0;
    
    switch (command) {
      case "Fire":
        let index = Number(tokens[1]);
        let damage = Number(tokens[2]);
        if (index >= 0 && index <= warShip.length - 1) {
          if (warShip[index] >= damage) {
            warShip[index] -= damage;
          } else {
            console.log(`You won! The enemy ship has sunken.`);
            isFinished = false;
            break;
          }
        }
        break;
      case "Defend":
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        let damage1 = Number(tokens[3]);
        if (
          startIndex >= 0 &&
          endIndex <= pirateShip.length &&
          startIndex < endIndex
        )
          for (let i = startIndex; i <= endIndex; i++) {
            if (pirateShip[i] > damage1) {
              pirateShip[i] -= damage1;
            } else {
              console.log(`You lost! The pirate ship has sunken.`);
              isFinished = false;
              break;
            }
          }
        break;
      case "Repair":
        let index1 = Number(tokens[1]);
        let health = Number(tokens[2]);
        if (index1 >= 0 && index1 <= pirateShip.length) {
          if (pirateShip[index1] + health < maxHC) {
            pirateShip[index1] += health;
          } else {
            pirateShip[index1] = maxHC;
          }
        }
        break;
      case "Status":
        for (let el of pirateShip) {
          if (el < checkMaxHC) {
            counter++;
          }
        }
        console.log(`${counter} sections need repair.`);
        break;
    }
  }
  let sumPS = 0;
  let sumWS = 0;
  if (isFinished) {
    for (let el of pirateShip) {
      sumPS += el;
    }
    for (let el of warShip) {
      sumWS += el;
    }

    console.log(`Pirate ship status: ${sumPS}
Warship status: ${sumWS}`);
  }
}
solve(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
//80/100;

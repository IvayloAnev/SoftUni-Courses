function solve(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHC = Number(input.shift());
    let sumPS = 0;
    let sumWS = 0;
    let pSL = pirateShip.length;
    let wSL = warShip.length;
    let counter = 0;
    isFinished = false;
  
    while (input[0] != "Retire") {
      let tokens = input.shift().split(" ");
      let command = tokens[0];
      let in1 = Number(tokens[1]);
      let in2 = Number(tokens[2]);
      let in3 = Number(tokens[3]);
  
      if (command === "Fire") {
        if (in1 >= 0 && in1 <= wSL-1) {
          warShip[in1] -= in2;
          if (warShip[in1] <= 0) {
            console.log(`You won! The enemy ship has sunken.`);
            isFinished = true;
            break;
          }
        }else{
            continue;
        }
      } else if (command === "Defend") {
        if (in1 >= 0 && in1 <= pSL-1 && in2 >= 0 && in2 <= pSL-1 && in1 <= in2) {
          for (let i = in1; i <= in2; i++) {
            pirateShip[i] -= in3;
            if (pirateShip[i] <= 0) {
              console.log(`You lost! The pirate ship has sunken.`);
              isFinished = true;
              break;
            }
          }
        }else{
            continue;
        }
      } else if (command === "Repair") {
        if (in1 >= 0 && in1 <= pSL-1) {
          if (pirateShip[in1] + in2 <= maxHC) {
            pirateShip[in1] += in2;
          }else{
              pirateShip[in1] = maxHC
          }
        }else{
            continue;
        }
      } else if (command === "Status") {
        for (let el of pirateShip) {
          if (el < maxHC * 0.2) {
            counter++;
          }
        }
        console.log(`${counter} sections need repair.`);
      }
    }
    for (let en of pirateShip) {
      sumPS += en;
    }
    for (let el of warShip) {
      sumWS += el;
    }
    if (!isFinished) {
      console.log(`Pirate ship status: ${sumPS}
Warship status: ${sumWS}`);
    }
  }
  
  solve([
     "12>13>11>20>66",
     "12>22>33>44>55>32>18",
     "70",
     "Fire 2 11",
   "Fire 8 100",
     "Defend 3 6 11",
     "Defend 0 3 5",
     "Repair 1 33",
     "Status",
     "Retire",
   ]);
  console.log(".............")
  solve(["2>3>4>5>6",
  "2>3>4>5>6>7>8>9>10>11",
  "15",
  "Fire 3 1",
  "Fire 2 1",
  "Fire 1 1",
  "Defend 0 4 1",
  "Repair 0 26",
  "Retire"
  ])
function solve(input) {
  let capacityEmploye1 = Number(input[0]);
  let capacityEmploye2 = Number(input[1]);
  let capacityEmploye3 = Number(input[2]);
  let peopleWaiting = Number(input[3]);
  let period = peopleWaiting;
  let capacityAllEmployee =
    capacityEmploye1 + capacityEmploye2 + capacityEmploye3;
  let hours = 0;
  for (let i = 1; i <= period; i++) {
    if (peopleWaiting <= 0) {
      break;
    }
    hours++;
    if (hours % 4 != 0) {
    peopleWaiting -= capacityAllEmployee;
  }
}
console.log(`Time needed: ${hours}h.`);
}
solve(["5", "6", "4", "46"]);

solve(["1", "2", "3", "45"]);

solve(["3", "2", "5", "40"]);

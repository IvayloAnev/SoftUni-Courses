function solve(input) {
  let houses = input.shift().split("@").map(Number);
  let cupiPosition = 0;
  while (input[0] != "Love!") {
    let token = input.shift().split(" ");
    let jump = Number(token[1]);
    cupiPosition += jump;
    if (cupiPosition >= houses.length) {
      cupiPosition = 0;
    }
    if (houses[cupiPosition] == 0) {
      console.log(`Place ${cupiPosition} already had Valentine's day.`);
    } else {
      houses[cupiPosition] -= 2;
      if (houses[cupiPosition] == 0) {
        console.log(`Place ${cupiPosition} has Valentine's day.`);
      }
    }
  }
  let missed = 0;
  for (let house of houses) {
    if (house > 0) {
      missed++;
    }
  }
  console.log(`Cupid's last position was ${cupiPosition}.`);
  if (missed > 0) {
    console.log(`Cupid has failed ${missed} places.`);
  } else {
    console.log(`Mission was successful.`);
  }
}
solve(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
console.log("...........");
solve(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
console.log("...........");
solve([
  "4@2@4@2",
  "Jump 1",
  "Jump 2",
  "Jump 1",
  "Jump 2",
  "Jump 2",
  "Jump 2",
  "Love!",
]);
//100/100;

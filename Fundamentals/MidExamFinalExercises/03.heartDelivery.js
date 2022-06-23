function solve(input) {
  let houses = input.shift().split("@").map(Number);
  let deliveredHearts = 2;
  let cupiPosition = 0;

  while (input[0] != "Love!") {
    let tokens = input.shift().split(" ");
    let index = Number(tokens[1]);

    cupiPosition += index;
    if (cupiPosition > houses.length - 1) {
      cupiPosition = 0;
    }
    if (houses[cupiPosition] > 0) {
      houses[cupiPosition] -= deliveredHearts;
      if (houses[cupiPosition] === 0) {
        console.log(`Place ${cupiPosition} has Valentine's day.`);
      }
    } else {
      console.log(`Place ${cupiPosition} already had Valentine's day.`);
    }
  }
  console.log(`Cupid's last position was ${cupiPosition}.`);
  let counter = 0;
  for (let el of houses) {
    if (el > 0) {
      counter++;
    }
  }
  if (counter === 0) {
    console.log(`Mission was successful.`);
  } else {
    console.log(`Cupid has failed ${counter} places.`);
  }
}
//100/100
solve(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);

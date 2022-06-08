function solve(array) {
  let wagons = array.pop().split(" ").map(Number);
  let peopleWaiting = Number(array);
  let capacity = wagons.length * 4;
  let sum = 0;

  for (let element of wagons) {
    sum += element;
  }
  let diff = capacity - peopleWaiting - sum;

  for (let i = 0; i <= wagons.length; i++) {
    if (wagons[i] < 4) {
      if (peopleWaiting <= 4) {
        wagons[i] = peopleWaiting;
        break;
      } else {
        peopleWaiting -= 4 - wagons[i];
        wagons[i] = 4;
      }
    }
  }

  if (diff == 0) {
    console.log(wagons.join(" "));
  } else if (diff > 0) {
    console.log(`The lift has empty spots!
${wagons.join(' ')}`);
  } else {
    console.log(`There isn't enough space! ${Math.abs(diff)} people in a queue!
${wagons.join(' ')}`);
  }
}

solve(["20", "0 0 0 0"]);
console.log("................");
solve(["0", "4 4 4"]);

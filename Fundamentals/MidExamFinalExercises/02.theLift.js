function solve(input) {
  let peopleWaiting = Number(input.shift());
  let lift = input.shift().split(" ").map(Number);

  let freeSpaces = 0;
  let ocupated = 0;
  let maxCapacity = 4;
  let add = 0;

  for (let element of lift) {
    ocupated += element;
  }
  freeSpaces = lift.length * 4 - ocupated;

  for (let i = 0; i < lift.length; i++) {
    if (lift[i] < maxCapacity) {
      if (peopleWaiting <= 4) {
        freeSpaces -= peopleWaiting;
        lift[i] = peopleWaiting;
        peopleWaiting = 0;
        break;
      }
      add = maxCapacity - lift[i];
      lift[i] += add;
      peopleWaiting -= add;
      freeSpaces -= add;
    }
  }
  if (peopleWaiting == 0 && freeSpaces > 0) {
    console.log(`The lift has empty spots!
${lift.join(" ")}`);
  } else if (peopleWaiting > 0 && freeSpaces >= 0) {
    console.log(`There isn't enough space! ${peopleWaiting} people in a queue!
${lift.join(" ")}`);
  } else if (peopleWaiting == 0 && freeSpaces == 0) {
    console.log(lift.join(" "));
  }
}

//solve(["15", "0 0 0 0 0"]);
//console.log(".....");
solve(["0", "0 2 0"]);

function solve(input) {
  let targets = input.shift().split(" ").map(Number);
  while (input[0] != "End") {
    let tokens = input.shift().split(" ");
    let command = tokens[0];
    let index = Number(tokens[1]);
    let value = Number(tokens[2]);
    let L = targets.length;
    let isExist = false;
    if (index >= 0 && index <= L - 1) {
      isExist = true;
    } else {
      isExist = false;
    }
    switch (command) {
      case "Shoot":
        if (isExist) {
          targets[index] -= value;
          if (targets[index] <= 0) {
            targets.splice(index, 1);
          }
        }
        break;
      case "Strike":
        let start = index - value;
        let end = index + value;
        let added = value * 2 + 1;
        if (isExist && (start <= 0 || end >= L - 1)) {
          console.log(`Strike missed!`);
        } else {
          targets.splice(start, added);
        }
        break;
      case "Add":
        if (isExist) {
          targets.splice(index, 0, value);
        } else {
          console.log(`Invalid placement!`);
        }
        break;
    }
  }

  console.log(targets.join("|"));
}
solve([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
console.log("................");
solve(["1 2 3 4 5", "Strike 0 1", "End"]);

//90/100;

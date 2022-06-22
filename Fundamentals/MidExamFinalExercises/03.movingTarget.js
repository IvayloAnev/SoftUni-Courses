function solve(input) {
  let array = input.shift().split(" ").map(Number);
  while (input[0] != "End") {
    let tokens = input.shift().split(" ");
    let command = tokens[0];
    let index1 = Number(tokens[1]);
    let value = Number(tokens[2]);
    let L = array.length
    let isExist = false;
    if (index1 >= 0 && index1 <= L - 1) {
      isExist = true;
    } else {
      isExist = false;
    }
    switch (command) {
      case "Shoot":
        if (isExist) {
          array[index1] -= value;
          if (array[index1] <= 0) {
            array.splice(index1, 1);
          }
        }
        break;
      case "Add":
        if (isExist) {
          array.splice(index1, 0, value);
        } else {
          console.log(`Invalid placement!`);
        }
        break;
      case "Strike":
        let start = index1 - value;
        let end = index1 + value;
        let radius = value * 2 + 1;
        if (isExist && (start>=0 && end<=L-1)) {
          array.splice(start,radius);
        } else {
          console.log(`Strike missed!`);
        }
        break;
    }
  }
  console.log(array.join("|"));
}
solve([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
console.log("........")
solve(["1 2 3 4 5",
"Strike 0 1",
"End"])
//100/100

function solve(input) {
  let list = input.shift().split("!");
  while (input[0] != "Go Shopping!") {
    let tokens = input.shift().split(" ");
    let command = tokens[0];
    let item1 = tokens[1];
    let item2 = tokens[2];
    switch (command) {
      case "Urgent":
        if (!list.includes(item1)) {
          list.unshift(item1);
        }
        break;
      case "Unnecessary":
        if (list.includes(item1)) {
          list.splice(list.indexOf(item1), 1);
        }

        break;
      case "Correct":
        if (list.includes(item1)) {
          list.splice(list.indexOf(item1), 1, item2);
        }
        break;
      case "Rearrange":
        if (list.includes(item1)) {
          list.splice(list.indexOf(item1), 1);
          list.push(item1);
        }
        break;
    }
  }

  console.log(list.join(", "));
}
solve([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
//100/100

function solve(input) {
  let journal = input.shift().split(", ");
  let isExist = true;

  while (input[0] != "Craft!") {
    let tokens = input.shift().split(" - ");
    let command = tokens[0];
    let item = tokens[1];
    let index = journal.indexOf(item);

    if (journal.includes(item)) {
      isExist = true;
    } else {
      isExist = false;
    }
    switch (command) {
      case "Collect":
        if (!isExist) {
          journal.push(item);
        }
        break;

      case "Drop":
        if (isExist) {
          journal.splice(index, 1);
        }
        break;

      case "Combine Items":
        let combItms = item.split(":");
        let item1 = combItms[0];
        let item2 = combItms[1];
        if (journal.includes(item1)) {
          journal.splice(journal.indexOf(item1) + 1, 0, item2);
        }
        break;

      case "Renew":
        if (isExist) {
          journal.splice(index, 1);
          journal.push(item);
        }

        break;
    }
  }
  console.log(journal.join(", "));
}
solve(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);

console.log("......");

solve([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);

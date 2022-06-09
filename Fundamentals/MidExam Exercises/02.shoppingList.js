function solve(array) {
  let list = array.shift().split("!");

  while (array[0] != "Go Shopping!") {
    let tokens = array.shift().split(" ");
    let command = tokens[0];
    let product = tokens[1];
    let product1 = tokens[2];
    switch (command) {
      case "Unnecessary":
        //"Unnecessary {item}" - remove the item with the given name,
        //only if it exists in the list. Otherwise, skip this command.
        for (let element of list) {
          if (element === product) {
            list.splice(list.indexOf(product), 1);
          }
        }
        break;
      case "Urgent":
        //"Urgent {item}" - add the item at the start of the list.
        //If the item already exists, skip this command
        if (!list.includes(product)) {
          list.unshift(product);
        }
        break;
      case "Correct":
        //"Correct {oldItem} {newItem}" - if the item with the given old name exists,
        // change its name with the new one. Otherwise, skip this command.
        for (let element of list) {
          if (element === product) {
            list.splice(list.indexOf(product), 1, product1);
          }
        }

        break;
        console.log(list);
      case "Rearrange":
        //"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add
        //it at the end of the list. Otherwise, skip this command.
        for (let element of list) {
          if (element === product) {
            let removed = list.splice(list.indexOf(product), 1).join();
            list.push(removed);
          }
        }
        break;
    }
  }
  console.log(list.join(", "));
}
solve([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
console.log("......................");
solve([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);

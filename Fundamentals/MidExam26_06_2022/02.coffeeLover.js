function solve(input) {
  let collection = input.shift().split(" ");
  let n = Number(input.shift());
  for (let i = 1; i <= n; i++) {
    let tokens = input.shift().split(" ");
    let command = tokens[0];
    switch (command) {
      case "Include":
        //check if its in the list !!!
        let coffee = tokens[1];
        collection.push(coffee);
        break;
      case "Remove":
        let position = tokens[1];
        let numbers = Number(tokens[2]);
        if (position === "first") {
          collection.splice(0, numbers);
        } else {
          collection.splice(collection.length - numbers, numbers);
        }
        break;
      case "Prefer":
        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);
        if (
          index1 >= 0 &&
          index1 <= collection.length - 1 &&
          index2 >= 0 &&
          index2 <= collection.length - 1
        ) {
          if (index1 > index2) {
            let coffee1 = collection.splice(index1, 1);
            let coffee2 = collection.splice(index2, 1);
            collection.splice(index2, 0, coffee1[0]);
            collection.splice(index1, 0, coffee2[0]);
          } else {
            let temp = 0;
            temp = index1;
            index1 = index2;
            index2 = temp;
            let coffee1 = collection.splice(index1, 1);
            let coffee2 = collection.splice(index2, 1);
            collection.splice(index2, 0, coffee1[0]);
            collection.splice(index1, 0, coffee2[0]);
          }
        }
        break;
      case "Reverse":
        collection.reverse();
        break;
    }
  }
  console.log(`Coffees:
${collection.join(' ')}
  `);
}
solve(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
"3",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 4 1"])






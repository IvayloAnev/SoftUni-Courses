function solve(input) {
    let invertory = input.shift().split(", ");
    while (input[0] != "Craft!") {
      let tokens = input.shift().split(" - ");
      let command = tokens[0];
      let item = tokens[1];
  
      switch (command) {
        case "Collect":
          if (!invertory.includes(item)) {
            invertory.push(item);
          }
          break;
        case "Drop":
          if (invertory.includes(item)) {
            invertory.splice(invertory.indexOf(item), 1);
          }
          break;
        case "Combine Items":
          combo = item.split(":");
          let item1 = combo[0];
          let item2 = combo[1];
          if (invertory.includes(item1)) {
            invertory.splice(invertory.indexOf(item1) + 1, 0, item2);
          }
          break;
        case "Renew":
          if (invertory.includes(item)) {
            invertory.splice(invertory.indexOf(item), 1);
            invertory.push(item);
          }
          break;
      }
    }
    console.log(invertory.join(", "));
  }
  solve(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
  //100/100
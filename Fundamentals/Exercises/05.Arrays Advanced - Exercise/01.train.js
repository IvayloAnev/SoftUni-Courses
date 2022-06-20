function train(wagon) {
  let passengersInWagon = wagon.shift().split(" ").map(Number);
  //вадим първия елемент , правим от стринг масив , парсваме към чусло;
  let maxCapacity = Number(wagon.shift());

  for (const command of wagon) {
    let curCommand = command.split(" ");

    if (curCommand[0] === "Add") {
      passengersInWagon.push(Number(curCommand[1]));
    } else {
      for (let i = 0; i, passengersInWagon.length; i++) {
        if (passengersInWagon[i] + Number(curCommand[0]) <= maxCapacity) {
          passengersInWagon[i] += Number(curCommand[0]);
          break;//трябва да намери само 1 място и спира !!!
        }
      }
    }
  }
  console.log(passengersInWagon.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
//100/100
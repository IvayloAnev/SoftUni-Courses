function solve(input) {
  let chests = input.shift().split("|");
  let isValid = false;
  let sum = 0;
  let avg = 0;
  let counter = 0;
  isEmpty = false;

  while (input[0] != "Yohoho!") {
    let tokens = input.shift().split(" ");
    let command = tokens.shift();

    switch (command) {
      case "Loot":
        for (let element of tokens) {
          if (!chests.includes(element)) {
            chests.unshift(element);
          }
        }
        break;

      case "Drop":
        let index = Number(tokens[0]);
        if (index >= 0 && index < chests.length - 1) {
          isValid = true;
        } else {
          isValid = false;
        }

        if (isValid) {
          let word = chests[index];
          chests.splice(index, 1);
          chests.push(word);
        }
        break;

      case "Steal":
        let index1 = Number(tokens[0]);
        let L = chests.length;
        if (L > index1) {
          let forPrint = chests.splice(L - index1, index1);
          console.log(forPrint.join(", "));
        } else {
          isEmpty = true;
        }
        break;
    }
  }
  if (!isEmpty) {
    for (let element of chests) {
      sum += element.length;
      counter++;
    }
    avg = sum / counter;
    console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
  } else {
    console.log(chests.join(", "));
    console.log(`Failed treasure hunt.`);
  }
}

solve([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
console.log("...............");
solve([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
100/100;

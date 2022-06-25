function solve(input) {
  let chests = input.shift().split("|");
  while (input[0] != "Yohoho!") {
    let tokens = input.shift().split(" ");
    let command = tokens.shift();

    switch (command) {
      case "Loot":
        let itmes = tokens;
        for (let el of itmes) {
          if (!chests.includes(el)) {
            chests.unshift(el);
          }
        }
        break;
      case "Drop":
        let index = Number(tokens[0]);
        let item = chests[index];
        if (index >= 0 && index <= chests.length - 1) {
          chests.splice(index, 1);
          chests.push(item);
        }
        break;
      case "Steal":
        let count = Number(tokens[0]);
        let deleted = [];
        if (count <= chests.length - 1) {
          deleted = chests.splice(chests.length - count, count);
        } else {
          deleted = chests.splice(chests);
        }
        console.log(deleted.join(', '));
        break;
    }
  }
  let averageGain = 0;
  let sum = 0;
  for (let el of chests) {
    sum += el.length;
    averageGain = sum / chests.length;
  }
  if (chests.length > 0) {
    console.log(
      `Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`
    );
  } else {
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

console.log("..........");
solve([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
//100/100

function solve(input) {
  let enumcardType = {
    C: 1,
    D: 2,
    H: 3,
    S: 4,
  };
  let enumCardPower = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let players = new Map();

  for (let line of input) {
    let [name, cards] = line.split(": ");
    cards = cards.split(", ");

    if (!players.has(name)) {
      players.set(name, new Set());
    }
    for (let card of cards) {
      players.get(name).add(card);
    }
  }

  for (let [key, value] of players) {
    let power = 0;
    for (let card of value) {
      let cardInfo = card.split("");
      let cardType = cardInfo.pop();
      let cardPower = cardInfo.join("");
      let cardPowerAsNumber = enumCardPower[cardPower];
      let cardTypeAsNumber = enumcardType[cardType];
      power += cardPowerAsNumber * cardTypeAsNumber;
    }

    console.log(`${key}: ${power}`);
  }
}

solve([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

console.log(".......");
solve([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
//100/100
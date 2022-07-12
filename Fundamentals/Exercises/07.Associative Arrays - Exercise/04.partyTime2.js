function solve(input) {
  let vipGuests = new Set();
  let regularGuests = new Set();
  while (input[0] != "PARTY") {
    let guest = input.shift();

    if (Number.isNaN(Number(guest[0]))) {
      regularGuests.add(guest);
    } else {
      vipGuests.add(guest);
    }
  }
  for (let guest of input) {
    vipGuests.delete(guest);
    regularGuests.delete(guest);
  }
  console.log(regularGuests.size + vipGuests.size);
  for (let guest of vipGuests) {
    console.log(guest);
  }
  for (let guest of regularGuests) {
    console.log(guest);
  }
}
solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
console.log(".........");
solve([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);

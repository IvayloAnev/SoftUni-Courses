function solve(input) {
  let vipInvites = new Set(); //create 2 colections
  let regularInvites = new Set();
  while (input[0] !== "PARTY") {
    //for each guest untill PARTY
    let guest = input.shift(); //-if vip else regular
    if (Number.isNaN(Number(guest[0]))) {
      regularInvites.add(guest);
    } else {
      vipInvites.add(guest);
    }
  }
  for (let guest of input) {
    // for each guets after PARTY - delete form invoitation list
    regularInvites.delete(guest);
    vipInvites.delete(guest);
  }
  //print sum of unused invetataions
  console.log(vipInvites.size + regularInvites.size);
  //print guest from 2 collections
  for (let guest of vipInvites) {
    console.log(guest);
  }
  for (let guest of regularInvites) {
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

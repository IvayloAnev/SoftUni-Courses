function phoneBook(input) {
  let result = {};
  for (let tokens of input) {
    let info = tokens.split(" ");
    let name = info[0];
    let number = info[1];

    result[name] = number;
  }
  for (let name in result) {
    console.log(`${name} -> ${result[name]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
//100/100;

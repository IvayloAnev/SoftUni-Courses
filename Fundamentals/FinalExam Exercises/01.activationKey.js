function solve(input) {
  let rawKey = input.shift();
  while (input[0] != "Generate") {
    let tokens = input.shift().split(">>>");
    let command = tokens[0];
    if (command == "Contains") {
      let substring = tokens[1];
      if (rawKey.includes(substring)) {
        console.log(`${rawKey} contains ${substring}`);
      } else {
        console.log(`Substring not found!`);
      }
    } else if (command == "Flip") {
      let ch = tokens[1];
      let stratIndex = Number(tokens[2]);
      let endIndex = Number(tokens[3]);
      if (ch === "Upper") {
        let substring = rawKey.substring(stratIndex, endIndex);
        let substringUpper = substring.toUpperCase();
        rawKey = rawKey.replace(substring, substringUpper);
        console.log(rawKey);
      } else {
        let substring = rawKey.substring(stratIndex, endIndex);
        let substringLower = substring.toLowerCase();
        rawKey = rawKey.replace(substring, substringLower);
        console.log(rawKey);
      }
    }else if(command === 'Slice'){
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        let subString = rawKey.substring(startIndex,endIndex);
        rawKey = rawKey.replace(subString,'');
        console.log(rawKey);
    }
  }
  console.log(`Your activation key is: ${rawKey}`);
}

//cdef
solve([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
console.log("........................");
solve([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
//100/100;
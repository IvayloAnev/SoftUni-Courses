function solve(input) {
  let result = new Set();
  for (let line of input) {
    let [command, number] = line.split(", ");
    if (command === "IN") {
      result.add(number);
    } else {
      result.delete(number);
    }
  }
  if (result.size === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    let sorted = Array.from(result).sort();
    for (let number of sorted) {
      console.log(number);
    }
  }
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

console.log("..........");
solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
//100/100
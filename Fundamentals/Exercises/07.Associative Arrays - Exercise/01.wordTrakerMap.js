function solve(input) {
  let result = new Map();
  let words = input.shift().split(" ");
  for (let word of words) {
    result.set(word, 0);
  }
  for (let word of input) {
    if (result.has(word)) {
      let oldvalue = result.get(word);
      result.set(word, oldvalue + 1);
    }
  }
  let sorted = Array.from(result.entries()).sort((a, b) => b[1] - a[1]);
  for (let [key, value] of sorted) {
    console.log(`${key} - ${value}`);
  }
}
solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
console.log("..................");
solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
//100/100;
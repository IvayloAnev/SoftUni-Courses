function solve(input) {
  let result = {};
  for (let word of input) {
    if (!result.hasOwnProperty(word)) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  }

  let sortedObj = Object.entries(result);
  sortedObj.sort((a, b) => b[1] - a[1]);

  for (let [key, value] of sortedObj) {
    console.log(`${key} -> ${value} times`);
  }
}
solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);

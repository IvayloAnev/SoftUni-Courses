function solve(input) {
  let result = {};//create collection
  let words = input.shift().split(" ");//parse input and split 1st element
  for (let word of words) {//for each element
    result[word] = 0;
  }
  for (let word of input) { //-check if element is what we are looking for
    if (result.hasOwnProperty(word)) { //- add to counter 1
      result[word]++;
    }
  }
 let sorted = Object.entries(result); //convert object to arrray
sorted.sort((a, b) => b[1] - a[1]);  //sort decreasing
 for (let [word, count] of sorted) { //print result
    console.log(`${word} - ${count}`);
  }
}
//100/100
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
console.log(`..............`);
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

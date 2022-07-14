function solve(str, search) {
  let words = str.split(" ");
  let counter = 0;
  for (let word of words) {
    if (word === search) {
      counter++;
    }
  }
  console.log(counter);
}
solve("This is a word and it also is a sentece", "is");
//100/100;

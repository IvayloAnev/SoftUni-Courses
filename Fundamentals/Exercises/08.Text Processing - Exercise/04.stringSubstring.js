function solve(word, str) {
  word = word.toLocaleLowerCase();
  let sentence = str.split(" ");
  let counter = 0;
  for (let element of sentence) {
    element = element.toLocaleLowerCase();

    if (word === element) {
      console.log(word);
      counter++;
      break;
    }
  }
  if (counter < 1) {
    console.log(`${word} not found!`);
  }
}
//100/100;
solve("javascript", "JavaScript is the best programming language");
console.log("...........");
solve("python", "JavaScript is the best programming language");

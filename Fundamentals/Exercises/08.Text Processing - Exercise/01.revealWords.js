function solve(words, sentece) {
  words = words.split(", ");
  for (let word of words) {
    let search = "*".repeat(word.length);
    sentece = sentece.replace(search, word);
  }
  console.log(sentece);
}
//100/100;
solve("great", "softuni is ***** place for learning new programming languages");
console.log("..........");
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);

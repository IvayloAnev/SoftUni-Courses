function solve(str) {
  let result = [];
  let currWord = str[0];

  for (let i = 1; i < str.length; i++) {
    let nextChar = str[i];
    if (nextChar.toUpperCase() != nextChar) {
      currWord = currWord.concat(nextChar);
    } else {
      result.push(currWord);
      currWord = str[i];
    }
  }
  result.push(currWord);
  console.log(result.join(", "));
}
//100/100;
solve("SplitMeIfYouCanHaHaYouCantOrYouCan");

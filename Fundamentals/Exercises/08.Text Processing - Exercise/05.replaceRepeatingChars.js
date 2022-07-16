function solve(str) {
  let uniq = "";
  for (let i = 0; i < str.length; i++) {
    let currChar = str.charAt(i);
    let nextChar = str.charAt(i + 1);
    if (currChar != nextChar) {
      uniq += currChar;
    }
  }
  console.log(uniq);
}
//100/100;
solve("aaaaabbbbbcdddeeeedssaa");

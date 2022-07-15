function solve(input) {
  let text = input.shift();
  while (input[0] != "Decode") {
    let tokens = input.shift().split("|");
    let command = tokens[0];
    let p1 = tokens[1];
    let p2 = tokens[2];
    if (command == "Move") {
      p1 = Number(p1);
      let lettersToMove = text.substring(0, p1);
      let result = text.replace(lettersToMove, "");
      result += lettersToMove;
      text = result;
    } else if (command == "Insert") {
      p1 = Number(p1);
      let tempText = "";
      tempText = text.split("");
      tempText.splice(p1, 0, p2);
      text = tempText.join("");
    } else if (command == "ChangeAll") {
      let tempText = "";
      while (text.includes(p1)) {
        tempText = text.replace(p1, p2);
        text = tempText;
      }
    }
  }
  console.log(`The decrypted message is: ${text}`);
}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
console.log("...............");
solve(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
//100/100
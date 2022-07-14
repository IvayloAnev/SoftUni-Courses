function solve(input) {
  let commands = {
    Move,
    Insert,
    ChangeAll,
  };
  let message = input.shift();
  while (input[0] !== "Decode") {
    let line = input.shift();
    let tokens = line.split("|");
    let command = tokens[0];
    message = commands[command](message, tokens[1], tokens[2]);
  }
  console.log(`The decrypted message is: ${message}`);

  function Move(str, num) {
    //take first n letters
    let start = str.substring(0, num);
    // take second half
    let end = str.substring(num);
    // return end + start
    return end + start;
  }

  function Insert(str, index, text) {
    //take first half
    let start = str.substring(0, index);
    //take second half
    let end = str.substring(index);
    //return first + text + second
    return start + text + end;
  }

  function ChangeAll(str, match, text) {
    // tokenize by removing match
    let tokens = str.split(match);
    //  sticj by text
    return tokens.join(text);
  }
}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

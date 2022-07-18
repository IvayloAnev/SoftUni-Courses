function solve(input) {
  let password = input.shift();
  let result = [];
  while (input[0] != "Done") {
    let tokens = input.shift().split(" ");
    let command = tokens[0];

    if (command == "TakeOdd") {
      let newPass = password.split("");
      for (let i = 0; i <= newPass.length; i++) {
        if (i % 2 !== 0) {
          result.push(newPass[i]);
        }
      }
      password = result.join("");
      console.log(password);
    } else if (command == "Cut") {
      let index = Number(tokens[1]);
      let size = Number(tokens[2]);
      let toDelete = password.substring(index, index + size);
      password = password.replace(toDelete, "");
      console.log(password);
    } else if (command == "Substitute") {
      let subString = tokens[1].trim();
      let substitute = tokens[2].trim();

      if (password.includes(subString)) {
        while( password.includes(subString)){
        password = password.replace(subString, substitute);
    }
        console.log(password);
      } else {
        console.log(`Nothing to replace!`);
      }
    }
  }
  console.log(`Your password is: ${password}`);
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
console.log("...............");
solve([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
//100/100;
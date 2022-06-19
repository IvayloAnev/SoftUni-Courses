function solve(input) {
  let game = input.shift().split(" ");
  let counter = 0;
  while (input[0] != "end") {
    let tokens = input.shift().split(" ");
    let index1 = Number(tokens[0]);
    let index2 = Number(tokens[1]);
    counter++;
    isWon = false;

    if (
      index1 === index2 ||
      index1 < 0 ||
      index2 < 0 ||
      index1 > game.length - 1 ||
      index2 > game.length - 1
    ) {
      game.splice(game.length / 2, 0, `-${counter}a`, `-${counter}a`);
      console.log(`Invalid input! Adding additional elements to the board`);
    } else if (index1 > index2) {
          if (game[index1] === game[index2]) {
        console.log(`Congrats! You have found matching elements - ${game[index1]}!`);
          game.splice(index1, 1);
          game.splice(index2, 1);
          }else{
           console.log(`Try again!`);
          }
      
    } else if (index1 < index2) {
      if (game[index1] === game[index2]) {
          console.log(`Congrats! You have found matching elements - ${game[index1]}!`);
          game.splice(index1, 1);
          game.splice(index2 - 1, 1);
      } else {
        console.log(`Try again!`);
      }
    }
    if(game.length === 0){
        console.log(`You have won in ${counter} turns!`)
        isWon = true
        break;
    }
   
  }
  if(!isWon)
  console.log(`Sorry you lose :(
${game.join(" ")}`)
}

solve(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
console.log(" ....... ");
solve(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
console.log('.............')
solve(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);

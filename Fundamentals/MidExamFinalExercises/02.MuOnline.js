function solve(input) {
  let maxHealth = 100;
  let currHealth = 100;
  let bitcoins = 0;
  let counter = 0;
  let isDeath = false;
  let rooms = input.split("|");
  let L = rooms.length;
  for (let i = 0; i <= L - 1; i++) {
    let tokens = rooms.shift().split(" ");
    let command = tokens[0];
    let value = Number(tokens[1]);
    counter++;

    if (command === "potion") {
      if (currHealth < maxHealth) {
        if (currHealth + value < maxHealth) {
          currHealth += value;
        } else {
          value = maxHealth - currHealth;
          currHealth = maxHealth;
        }
      }

      console.log(`You healed for ${value} hp.`);
      console.log(`Current health: ${currHealth} hp.`);
    } else if (command === "chest") {
      bitcoins += value;
      console.log(`You found ${value} bitcoins.`);
    } else {
      if (currHealth - value > 0) {
        console.log(`You slayed ${command}.`);
        currHealth -= value;
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${counter}`);
        isDeath = true;
        break;
      }
    }
  }

  if (!isDeath) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${currHealth}`);
  }
}
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");

//100/100

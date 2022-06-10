function solve(input) {
  let rooms = input.split("|");
  let L = rooms.length;
  health = 100;
  bitcoins = 0;
  let newHealth = 0;
  let added = 0;
  let counter = 0;
  isDeath = false;

  for (let i = 0; i < L; i++) {
    let room = rooms.shift().split(" ");
    let command = room[0];
    let value = Number(room[1]);
    counter++;

    if (command === "potion") {
      newHealth += health + value;
      if (newHealth > 100) {
        added = 100 - health;
        health = 100;
      } else {
        added = value;
        health = newHealth;
      }
      console.log(`You healed for ${added} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      bitcoins += value;
      console.log(`You found ${value} bitcoins.`);
    } else {
      if (health <= value) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${counter}`);
        isDeath = true;
        break;
      } else {
        health -= value;
        console.log(`You slayed ${command}.`);
      }
    }
  }
  if (!isDeath) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log("...........");
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
100/100;
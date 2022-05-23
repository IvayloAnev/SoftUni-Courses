function solve(array) {
  let food = Number(array.shift()) * 1000;
  let foodPerDay = 300;
  let hay = Number(array.shift()) * 1000;
  let cover = Number(array.shift()) * 1000;
  let weight = Number(array.shift()) * 1000;
  let days = 30;
  for (let index = 1; index <= days; index++) {
    if (food > 0 && hay > 0 && cover > 0) {
      food -= foodPerDay;

      if (index % 2 === 0) {
        let hayPerDay = food * 0.05;
        hay -= hayPerDay;
      }
      if (index % 3 === 0) {
        let coverPerDay = weight / 3;
        cover -= coverPerDay;
      }
    } else {
      break;
    }
  }

  food = (food / 1000).toFixed(2);
  hay = (hay / 1000).toFixed(2);
  cover = (cover / 1000).toFixed(2);

  if (food > 0 && hay > 0 && cover > 0) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${food}, Hay: ${hay}, Cover: ${cover}.`
    );
  } else {
    console.log(`Merry must go to the pet store!`);
  }
}

solve(["10", "5", "5.2", "1"]);
console.log(".......");
solve(["1", "1.5", "3", "1.5"]);
console.log("..........");
solve(["9", "5", "5.2", "1"]);
//100/100;
function solve(input) {
  let food = Number(input.shift()) * 1000;
  let hay = Number(input.shift()) * 1000;
  let cover = Number(input.shift()) * 1000;
  let weight = Number(input.shift()) * 1000;
  let dayDosageFood = 300;
  let dayDosageCover = weight / 3;
  let month = 30;
  let isHappy = true;
  for (i = 1; i <= month; i++) {
    food -= dayDosageFood;
    if (i % 2 === 0) {
      let dayDosageHay = food * 0.05;
      hay -= dayDosageHay;
    }
    if (i % 3 === 0) {
      cover -= dayDosageCover;
    }
    if (food <= 0 || hay <= 0 || cover <= 0) {
      console.log(`Merry must go to the pet store!`);
      isHappy = false;
      break;
    }
  }

  if (isHappy) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
        2
      )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
    );
  }
}
solve(["10", "5", "5.2", "1"]);
console.log(".........");
solve(["1", "1.5", "3", "1.5"]);
console.log(".........");
solve(["9", "5", "5.2", "1"]);
//100/100
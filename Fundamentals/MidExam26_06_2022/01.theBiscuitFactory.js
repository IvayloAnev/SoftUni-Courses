function solve(input) {
    let month = 30;
    let biscuitsPerDay = Number(input.shift());
    let countWorkers = Number(input.shift());
    let compatingFactory = Number(input.shift());
    let sum = 0;
    for (let i = 1; i <= month; i++) {
      if (i % 3 === 0) {
        sum += Math.floor(0.75 * biscuitsPerDay * countWorkers);
      } else {
        sum += biscuitsPerDay * countWorkers;
      }
    }
    let diff = Math.abs(sum - compatingFactory);
    let percentage = (diff / compatingFactory) * 100;
    console.log(`You have produced ${sum} biscuits for the past month.`);
    if (sum > compatingFactory) {
      console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else {
      console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }
  }
  solve(["78", "8", "16000"]);
  console.log("............");
  solve(["65", "12", "26000"]);
  console.log("............");
  solve(["163", "16", "67020"]);
  //100/100;
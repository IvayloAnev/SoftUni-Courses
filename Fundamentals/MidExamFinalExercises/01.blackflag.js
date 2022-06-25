function solve(input) {
  let days = Number(input.shift());
  let dayPlunder = Number(input.shift());
  let target = Number(input.shift());
  let sum = 0;
  for (let i = 1; i <= days; i++) {
    sum += dayPlunder;
    if (i % 3 === 0) {
      sum += dayPlunder / 2;
    }
    if (i % 5 === 0) {
      sum *= 0.7;
    }
  }
  let percentage = (sum / target) * 100;
  if (sum >= target) {
    console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
solve(["10", "20", "380"]);
//100/100;

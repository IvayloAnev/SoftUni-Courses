function solve(arr) {
  let days = Number(arr[0]);
  let plunger = Number(arr[1]);
  let target = Number(arr[2]);
  let sum = 0;

  for (let i = 1; i <= days; i++) {
    sum += plunger;
    if (i % 3 === 0) {
      sum += plunger * 0.5;
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
solve(["5", "40", "100"]);
console.log("............");
solve(["10", "20", "380"]);
//100/100;

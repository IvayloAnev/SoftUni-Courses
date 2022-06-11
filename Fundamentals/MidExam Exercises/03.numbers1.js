function solve(input) {
  let numbers = input.split(" ").map(Number);
  let L = numbers.length;
  let sum = 0;
  for (let i = 0; i < L; i++) {
    sum += numbers[i];
  }
  avg = sum / L;
  let filtered = numbers.filter((x) => x > avg).sort((a, b) => b - a);
  if (filtered.length == 0) {
    console.log(`No`);
  } else {
    result = filtered.slice(0, 5).join(" ");
    console.log(result);
  }
}
solve("10 20 30 40 50");
console.log("...............");
solve("5 2 3 4 -10 30 40 50 20 50 60 60 51");
console.log("...............");
solve("1");
console.log("...............");
solve("-1 -2 -3 -4 -5 -6");
//100/100;
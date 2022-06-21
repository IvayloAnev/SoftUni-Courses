function solve(input) {
  let array = input.split(" ").map(Number);
  let sum = 0;
  let result = [];
  for (let i = 0; i <= array.length - 1; i++) {
    sum += array[i];
  }
  avarage = sum / array.length;
  result = array
    .filter((x) => x > avarage)
    .sort((a, b) => b - a)
    .slice(0, 5);
  console.log(result.join(" "));
  if (result.length === 0) {
    console.log(`No`);
  }
}

solve("10 20 30 40 50");
console.log("...........");
solve("5 2 3 4 -10 30 40 50 20 50 60 60 51");
console.log("...........");
solve("1") / 100 / 100;

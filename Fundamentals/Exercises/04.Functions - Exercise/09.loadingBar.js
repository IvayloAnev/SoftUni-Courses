function solve(n) {
  let arr = [];
  let num = n / 10;
  for (let i = 1; i <= num; i++) {
    arr.push("%");
  }
  for (let j = 1; j <= 10 - num; j++) {
    arr.push(".");
  }
  if (n < 100) {
    console.log(`${n}% [${arr.join("")}]`);
    console.log(`Still loading...`);
  } else {
    console.log(`100% Complete!`);
  }
}
solve(100);
//100/100;

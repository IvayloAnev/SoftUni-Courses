function solve(n) {
  let arr = [];
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  for (numer of arr) {
    sum += numer;
  }
  if (sum === n) {
    console.log(`We have a perfect number!`);
  } else {
    console.log(`It's not so perfect.`);
  }
}
solve(280);
//100/100;

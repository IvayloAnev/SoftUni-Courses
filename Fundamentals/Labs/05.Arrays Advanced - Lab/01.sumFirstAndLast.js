function sumfirstAndLast(arr) {
  let firstNum = arr.shift();
  let lasttNum = arr.pop();
  let sum = Number(firstNum) + Number(lasttNum);
  console.log(sum);
}
sumfirstAndLast(["5", "10"]);

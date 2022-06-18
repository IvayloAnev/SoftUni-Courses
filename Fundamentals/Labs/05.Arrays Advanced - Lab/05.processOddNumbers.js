function processOddNumbers(arrInput) {
  let filtredArr = arrInput.filter((x, i) => i % 2 == 1);
  let doubledArr = filtredArr.map((x) => x * 2);
  let reversedArr = doubledArr.reverse();
  console.log(reversedArr.join(` `));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);

//100/100;
function processOddNumbers(arrInput) {
  console.log(
    arrInput
      .filter((x, i) => i % 2 == 1)
      .map((x) => x * 2)
      .reverse()
      .join(` `)
  );
}
  processOddNumbers([10, 15, 20, 25]);
  processOddNumbers([3, 0, 10, 4, 7, 3]);
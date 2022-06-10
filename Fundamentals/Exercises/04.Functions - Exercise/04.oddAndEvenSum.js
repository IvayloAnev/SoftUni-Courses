function oddAndEvenSum(input) {
  let inputAsString = input.toString();
  let inputAsStringL = inputAsString.length;
  let sumOdd = 0;
  sumEven = 0;
  for (i = 0; i < inputAsStringL; i++) {
    let currNum = Number(inputAsString[i]);

    if (currNum % 2 == 0) {
        sumEven += currNum;
    } else {
        sumOdd += currNum;
    }
  }
  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(1000435);

//100/100;

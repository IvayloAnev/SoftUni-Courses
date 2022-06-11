function solve(a, b, c) {
  let negativeCounter = 0;
  let num1 = a;
  let num2 = b;
  let num3 = c;

  if (num1 < 0) {
    negativeCounter++;
  }
  if (num2 < 0) {
    negativeCounter++;
  }
  if (num3 < 0) {
    negativeCounter++;
  }

  if (negativeCounter % 2 == 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

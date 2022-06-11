function solve(num1, num2, op) {
  let operator = op;
  let result = 0;

  let multiply = (num1, num2) => num1 * num2;
  let divide = (num1, num2) => num1 / num2;
  let add = (num1, num2) => num1 + num2;
  let subtract = (num1, num2) => num1 - num2;

  switch (operator) {
    case "multiply":
      result = multiply(num1, num2);
      break;

    case "divide":
      result = divide(num1, num2);
      break;

    case "add":
      result = add(num1, num2);
      break;

    case "subtract":
      result = subtract(num1, num2);
      break;
  }
  console.log(result);
}

function solve(pr, qts) {
  let product = pr;
  let quantity = qts;
  let price = 0;
  let sum = 0;

  switch (product) {
    case "coffee":
      price = 1.5;
      break;

    case "coke":
      price = 1.4;
      break;

    case "water":
      price = 1;
      break;

    case "snacks":
      price = 2;
      break;
  }
  sum = price * quantity;
  console.log(sum.toFixed(2));
}

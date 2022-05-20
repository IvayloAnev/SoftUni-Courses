function solve(array) {
  let sumWithoutTaxes = 0;
  let taxes = 0;
  let totalSum = 0;

  let i = 0;

  while (array[i] !== "special" && array[i] !== "regular") {
    let price = Number(array[i]);

    if (price < 0) {
      console.log("Invalid price!");
    } else {
      sumWithoutTaxes += price;
    }

    i++;
  }

  taxes = sumWithoutTaxes * 0.2;
  totalSum = sumWithoutTaxes + taxes;

  let isSpecial = array.includes("special");

  if (isSpecial) {
    totalSum *= 0.9;
  }

  if (sumWithoutTaxes > 0) {
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${sumWithoutTaxes.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${totalSum.toFixed(2)}$`);
  } else {
    console.log("Invalid order!");
  }
}

solve([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    

solve([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    

solve([
    'regular'
    ])
    

function solve(input) {
  let typeCustomer = input.pop();
  let totalPrice = 0;
  let finalPriceWithTaxes = 0;
  let totalPriceWithTaxes = 0;

  for (let i = 0; i < input.length; i++) {
    let currPrice = Number(input[i]);
    if (currPrice < 0) {
      console.log(`Invalid price!`);
    } else {
      totalPrice += currPrice;
    }
  }
  if (totalPrice <= 0) {
    console.log(`Invalid order!`);
  } else {
    totalPriceWithTaxes = totalPrice * 1.2;

    if (typeCustomer === "special") {
      finalPriceWithTaxes = totalPriceWithTaxes * 0.9;
    } else {
      finalPriceWithTaxes = totalPriceWithTaxes;
    }
    let taxes = totalPrice * 0.2;
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPrice.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${finalPriceWithTaxes.toFixed(2)}$`);
  }
}
solve(["1023", "15", "-20", "-5.50", "450", "20", "17.66", "19.30", "regular"]);
    
    
//100/100;
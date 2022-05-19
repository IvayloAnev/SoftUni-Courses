function yardGreening (input){
const pricePerSqrMtr = 7.61;
const sqrMeters = Number(input[0]);
const price = pricePerSqrMtr * sqrMeters;
const discountPrecentage =  18 / 100;
const finalPirice = price - price * discountPrecentage;
const discount = price * discountPrecentage;
console.log(`The final price is: ${finalPirice} lv.`);
console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);
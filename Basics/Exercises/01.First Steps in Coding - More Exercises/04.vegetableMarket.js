function vegetableMarket(input){
let priceKgVege = Number(input[0]);
let priceKgFruits = Number(input[1]);
let KgVege = Number(input[2]);
let KgFruits = Number(input[3]);
let totalSum = priceKgVege * KgVege + priceKgFruits * KgFruits;
let totalSumEu = totalSum / 1.94;
console.log(totalSumEu.toFixed(2)); 

}
//100/100
vegetableMarket([0.194,19.4,10,10]);
vegetableMarket([1.5,2.5,10,10]);
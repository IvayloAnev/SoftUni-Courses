function flowerShop(input){
const priceMagnolias = 3.25;
const priceHyacinths = 4;
const priceRoses = 3.5;
const priceCactuses = 8
const countMagnolias = Number(input[0]);
const countHyacint = Number(input[1]);
const countRoses = Number(input[2]);
const countCactuses = Number(input[3]);
const pricePresent = Number(input[4]);
let order = 
priceMagnolias * countMagnolias +
priceHyacinths * countHyacint +
priceRoses * countRoses +
priceCactuses * countCactuses ;
order *=0.95;
const difference = Math.abs(order - pricePresent);
if ( order >= pricePresent) {
    console.log(`She is left with ${Math.floor(difference)} leva.`);
} else {
    console.log(`She will have to borrow ${Math.ceil(difference)} leva.`);
}
}
flowerShop([2,3,5,1,50]);
flowerShop([15,7,5,10,100]);

//100/100;
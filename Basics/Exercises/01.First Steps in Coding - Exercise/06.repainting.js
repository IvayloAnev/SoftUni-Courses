function repainting (input){
const naylonPrice = 1.5;
const paintPrice = 14.5;
const thinnerPrice = 5;
const neededNaylonSquar = Number(input[0]);
const neededPaintLiters = Number(input[1]);
const neededThinnerLiters = Number(input[2]);
const neededworkingHours = Number(input[3]);
const costNylon = neededNaylonSquar * naylonPrice;
const costPaint = neededPaintLiters * paintPrice;
const costThinner = neededThinnerLiters * thinnerPrice;
const extraCostPaint =  costPaint * 0.1;
const extraCostNaylon = 2 * naylonPrice;
const bagPrice = 0.4;
const totalCostMaterial = costNylon + extraCostNaylon + costPaint + extraCostPaint + 
 bagPrice + costThinner;
const workingHoursPricePerHour = totalCostMaterial * 0.3;
const workingHoursCost = workingHoursPricePerHour * neededworkingHours;
const sumAllCosts = totalCostMaterial + workingHoursCost;
console.log(sumAllCosts);
    
}
repainting(["10","11","4","8"]);
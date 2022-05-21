function foodDelivery(input) {

  
const chikenMenuPrice = 10.35; 
const fishMenuPrice  = 12.40; 
const vegMenuPrice = 8.15;
const amountChukenMenu = Number(input[0]);
const amountFishMenu = Number(input[1]);
const amountVegMenu = Number(input[2]);
const costChiken = chikenMenuPrice * amountChukenMenu;
const costFish = fishMenuPrice * amountFishMenu;
const costVeg = vegMenuPrice * amountVegMenu;
const totalCostsMenus= costChiken + costFish + costVeg;
const desert = totalCostsMenus * 0.2;
const delivery = 2.5;
const Order = totalCostsMenus + desert + delivery;
console.log(Order);

}
foodDelivery(["2","4","3"]);
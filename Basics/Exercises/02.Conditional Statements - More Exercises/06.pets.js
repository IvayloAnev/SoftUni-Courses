function pets(input){
const countDays = Number(input[0]);
const leftFoodKgs = Number(input[1]);
const dogFoodPerDayKgs = Number(input[2]);
const catFoodPerDayKgs = Number(input[3]);
const turtleFoodPerDayGrs = Number(input[4]);
const turtleFoodPerDayKgs = turtleFoodPerDayGrs / 1000;
const foodAllPerDay = 
 (dogFoodPerDayKgs + catFoodPerDayKgs + turtleFoodPerDayKgs) * countDays;
 const diffrence = Math.abs( foodAllPerDay - leftFoodKgs) ;
 if(leftFoodKgs >= foodAllPerDay) {
console.log(`${Math.floor(diffrence)} kilos of food left.`);
 } else {
     console.log(`${Math.ceil(diffrence)} more kilos of food are needed.`);
 }
}

pets([2,10,1,1,1200]);
pets([5,10,2.1,0.8,321]);

//100/100;

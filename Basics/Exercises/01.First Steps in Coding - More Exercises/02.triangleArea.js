function triangleArea(input){
const a = Number(input[0]);
const h = Number(input[1]);
const area = a * h / 2;
console.log(area.toFixed(2));
}
//100/100
triangleArea([20,30]);
triangleArea([15,35]);
triangleArea([7.75,8.45]);
triangleArea([1.23456,4.56789]);
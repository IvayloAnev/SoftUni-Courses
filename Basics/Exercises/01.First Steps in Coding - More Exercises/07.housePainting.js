function housePainting(input){
const greenPaintPerSqrMtr = 1 / 3.4;
const redPaintPerSqrMtr = 1 / 4.3;
const areaDoor = 2 * 1.2;
const areaWindow = 1.5 * 1.5;
const x = Number(input[0]);
const y = Number(input[1]);
const h = Number(input[2]);
const greenArea = x * x + (x * x -areaDoor) + 2 * (y * x - areaWindow);
//console.log(greenArea);
const redArea = 2 * x * y +  x * h;
//console.log(redArea);
const litersGreenPaint = greenArea * greenPaintPerSqrMtr;
const litersRedPaint = redArea * redPaintPerSqrMtr;
console.log(litersGreenPaint.toFixed(2));
console.log(litersRedPaint.toFixed(2));

}

housePainting([6,10,5.2]);
housePainting([10.25,15.45,8.88]);

//100/100
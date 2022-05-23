function trainingLab(input){
const w = Number(input[0]);
const h = Number(input[1]);

const amountDesksPerRay = (h - 1) / 0.7;
let downDesks = Math.floor(amountDesksPerRay);
const ammountOfrays = w / 1.2;
let downRays = Math.floor(ammountOfrays);
const amountDesks = downDesks * downRays - 3;
console.log(amountDesks);
//100/100
}

trainingLab([15,8.9]);
trainingLab([8.4,5.2]);
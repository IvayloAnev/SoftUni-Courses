function circleAreaAndPerimeters(input){
const r = Number(input[0]);
const S = r * Math.PI * r;
const P = 2 * Math.PI * r;
console.log(S.toFixed(2));
console.log(P.toFixed(2));

}
//100/100
circleAreaAndPerimeters([3]);
circleAreaAndPerimeters([4.5]);
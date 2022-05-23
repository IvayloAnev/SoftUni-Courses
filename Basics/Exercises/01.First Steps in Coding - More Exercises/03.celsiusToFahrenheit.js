function celsiusToFar(input){
const celsius = Number(input[0]);
const faren  = celsius * 1.8 + 32;
console.log(faren.toFixed(2));

}
//100/100
celsiusToFar([25]);
celsiusToFar([0]);
celsiusToFar([-5.5]);
celsiusToFar([32.3]);

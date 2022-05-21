function fishtank(input) {
const lenght = Number(input[0]);
const widght = Number(input[1]);
const high = Number(input[2]);	
const precentageSandEtc = Number(input[3]) ;
const totalVolume = lenght * widght * high;
const waterDecimeters = totalVolume - totalVolume * precentageSandEtc / 100;
const waterliters = waterDecimeters / 1000; 
console.log(waterliters);

}

fishtank(["85 ","75","47","17"]);
function wheatherForecast2 (input){
const degrese = Number(input[0]);
if ( degrese < 5){
    console.log("unknown");
} else if (degrese <=12) {
    console.log("Cold");
} else if (degrese <15){
    console.log("Cool");
} else if ( degrese <=20) {
    console.log("Mild");
} else if (degrese <26) {
    console.log("Warm");
} else if (degrese <=35) {
    console.log("Hot");
} else if (degrese > 35){
    console.log("unknown");
}
}
wheatherForecast2([16.5]);
wheatherForecast2([8]);
wheatherForecast2([22.4]);
wheatherForecast2([26]);
wheatherForecast2([0]);
 
//100/100
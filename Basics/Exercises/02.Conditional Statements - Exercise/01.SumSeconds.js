function sumSeconds(input) {
const firstTime = Number(input[0]);
const secondTime = Number(input[1]);
const thirdTime = Number(input[2]);

const totalTime = firstTime + secondTime + thirdTime;
const minutes = totalTime / 60;
const seconds = totalTime % 60;

if (seconds < 10){
       console.log(`${Math.floor(minutes)}:0${seconds}`);
} else console.log(`${Math.floor(minutes)}:${seconds}`);


}
sumSeconds(["35","45","44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50","50","49"]);
sumSeconds(["14", "12","10"]);
//100/100



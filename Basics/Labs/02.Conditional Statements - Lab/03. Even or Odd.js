function evenOrOdd (input){
const num = Number(input[0]);
if ( num % 2 === 0 ) {
    console.log("even");
} else {
    console.log("odd");
}
}

evenOrOdd(["2"]);
evenOrOdd(["3"]);
evenOrOdd(["25"]);
evenOrOdd(["1024"]);
//100/100
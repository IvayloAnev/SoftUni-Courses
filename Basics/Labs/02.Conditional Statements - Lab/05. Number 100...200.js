function Number100to200(input){
const number = Number(input[0]);
if (number < 100){
    console.log("Less than 100");
} else if(number <= 200){
    console.log("Between 100 and 200");
} else {
    console.log("Greater than 200");
}
}
Number100to200(["95"]);
Number100to200(["120"]);
Number100to200(["210"]);
//100/100
